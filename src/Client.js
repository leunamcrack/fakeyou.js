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
        this.user = null;
        this.results = new ResultManager(this);
        this.categories = new CategoryManager(this);
        this.models = new ModelManager(this);
        this.isReady = false;
        this.usernameOrEmail = options.usernameOrEmail;
        Object.defineProperty(this, 'session', {value:{}});
        this.__patchOptions(options);
    };

    get token() {
        return this.session.token;
    };

    searchModel(query) {
        if(!query) throw new FakeYouError(Constants.Error.optionNotFound('query'));
        if(!Util.checkType(query, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('query', 'string'));
        const search = this.models.cache.filter(m => 
            Util.verifyValue(m.title, query) || Util.verifyValue(m.name, query)
        );
        return search;
    };

    async queue() {
        const queueData = await Requester.__getData(Constants.URL.queue, Util.__getHeaders(this));
        let options = {
            count: queueData.pending_job_count,
            time: new Date(queueData.cache_time)
        }
        return options;
    };
    async start() {
        await this.models.__fetchAll();
        await this.categories.__fetchAll();
        if(this.session.usernameOrEmail && this.session.password) {
            const info = await Requester.__login(this);
            this.user = new ClientUser(this, info);
        };
        this.isReady = true;
        return this;
    };
    async makeTTS(model, text) {
        if(!model) throw new FakeYouError(this, Constants.Error.optionNotFound('model'));
        if(!text) throw new FakeYouError(this, Constants.Error.optionNotFound('text'));
        if(!Util.checkType(text, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('text', 'string'));
        const findModel = this.models.resolve(model);
        if(!findModel) throw new FakeYouError(this, Constants.Error.modelNotFound(model));
        return findModel.request(text);
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
            return new User(this, user);
        };
    }
    __patchOptions(options = {}) {
        if('token' in options) {
            if(!Util.checkType(options.token, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('token', 'string'));
            this.session.token = options.token ?? null;
        };
        if('usernameOrEmail' in options) {
            if(!Util.checkType(options.usernameOrEmail, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('username or email', 'string'));
            this.session.usernameOrEmail = options.usernameOrEmail?? null;
        };
        if('password' in options) {
            if(!Util.checkType(options.password, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('password', 'string'));
            this.session.password = options.password ?? null;
        };
        return this;
    };
}

module.exports = Client;