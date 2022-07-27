const Constants = require('./util/Constants');
const Util = require('./util/Util');
const Requester = require('./util/Requester.js');
const CategoryManager = require('./managers/CategoryManager.js');
const ModelManager = require('./managers/ModelManager.js');
const ResultManager = require('./managers/ResultManager.js');
const LeaderBoard = require('./structures/LeaderBoard.js');
const FakeYouError = require('./util/FakeYouError');
const ClientUser = require('./structures/ClientUser.js');
const Model = require('./structures/Model');
const User = require('./structures/User');

class Client {
    constructor(options) {
        this.isReady = false;
        this.user = null;
        this.results = new ResultManager(this);
        this.categories = new CategoryManager(this);
        this.models = new ModelManager(this);
        this.session = {};
        this.__patchOptions(options);
    };
    searchModel(query) {
        if(!Util.checkType(query, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('query', 'string'));
        const search = this.cache.filter(m => 
            Util.verifyValue(m.title, query) ?? Util.verifyValue(m.name, query) ?? m.token == query
        );
        if(!search) return null;
        if(search.size <= 1) return search.first(); 
    };

    async start() {
        if(this.isReady) return this;
        this.isReady = true;
        await this.models.__fetchAll();
        await this.categories.__fetchAll();
        if(this.session.usernameOrEmail && this.session.password) {
            const info = await Requester.__login(this);
            this.user = new ClientUser(this, info);
        };
        return this;
    };
    async makeRequest(model, text) {
        if(!model) throw new FakeYouError(this, Constants.Error.optionNotFound('model'));
        if(!text) throw new FakeYouError(this, Constants.Error.optionNotFound('text'));
        if(!Util.checkType(text, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('text', 'string'));
        if(model instanceof Model) {
            return model.makeRequest(text);
        } else {
            if(!Util.checkType(model, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('model', 'string'));
            const findModel = this.searchModel(model);
            if(!findModel) throw new FakeYouError(this, Constants.Error.modelNotFound(model));
            return findModel.makeRequest(text);
        }
    };
    async leaderboard() {
        const getData = await Requester.__getData(Constants.URL.base+'/leaderboard', Util.__getHeaders(this));
        return new LeaderBoard(this, getData);
    };
    async fetchUser(query) {
        if(!query) throw new FakeYouError(this, Constants.Error.optionNotFound('query'));
        if(query instanceof User) {
            return await query.fetch();
        } else {
            if(!Util.checkType(query, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('query', 'string'));
            const { user } = await Requester.__getData(Constants.URL.profile(query), Util.__getHeaders(this));
            return new User(this.client, user);
        };
    }
    __patchOptions(options = {}) {
        if('token' in options) {
            if(!Util.checkType(options.token, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('token', 'string'));
            this.token = token;
        };
        if('usernameOrEmail' in options) {
            if(!Util.checkType(options.usernameOrEmail, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('username or email', 'string'));
            this.session.usernameOrEmail = options.usernameOrEmail;
        };
        if('password' in options) {
            if(!Util.checkType(options.password, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('password', 'string'));
            this.session.password = options.password;
        };
        return this;
    };
}

module.exports = Client;