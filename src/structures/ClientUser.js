const FakeYouError = require('../util/FakeYouError.js');
const User = require('../structures/User.js');
const Util = require('../util/Util.js');
const Requester = require('../util/Requester.js');
const Constants = require('../util/Constants.js');
const Group = require('./Group.js');

class ClientUser extends User {
    constructor(client, data) {
        super(client, data);
        this.plan = data.fakeyou_plan ?? null;
        this.isBanned = Boolean(!data.can_use_tts && !data.can_use_w2l);
        this.isMod = Boolean(data.can_ban_users);
    };

    __patchUserData(data) {
        const options = {};
        const arrayOptions = [['cashapp', 'discord', 'github', 'patreon',
        'twitter', 'twitch', 'website'], ['ttsVisibility', 'w2lVisibility']];
        if('description' in data) {
            if(!Boolean(data.description)) options.description = "";
            else {
                if(!Util.checkType(data.description, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('description', "string"));
                if(data.description.length > 4096) throw new FakeYouError(this, Constants.Error.invalidOption('description'));
                options.description = data.description;
            };   
        } else {
            options.description = this.description;
        };
        arrayOptions[0].forEach((k) => {
            if(k in data) {
                if(!Boolean(data[k])) options[k] = "";
                else {
                    if(!Util.checkType(data[k], 'string', true)) throw new FakeYouError(this, Constants.Error.invalidType(k, "string"));
                    if(!Constants.RegExp[k].test(data[k])) throw new FakeYouError(this, Constants.Error.invalidOption(k));
                    options[k] = data[k];
                }
            } else {
                options[k] = this.links[k] ?? "";
            }
        });
        arrayOptions[1].forEach((k) => {
            if(k in data) {
                if(!Util.checkType(data[k], 'boolean')) throw new FakeYouError(this, Constants.Error.invalidType(k, "boolean"));
                options[k] = Boolean(data[k]) ? "public" : "hidden";
            } else {
                options[k] = this[k];
            }

        });
        return options;
    };

    async edit(data) {
        if(!data) throw new FakeYouError(this, Constants.Error.optionNotFound('data'));
        if(!Util.checkType(data, 'object')) throw new FakeYouError(this, Constants.Error.invalidType('data', "object"));
        if(Util.__isNotChanges(this, data)) return this;
        const newUser = await Requester.__editUser(this.client, this, this.__patchUserData(data));
        this.client.user = new ClientUser(this.client, newUser);
        return this.client.user;
    };
    async ttsResults() {
        const { results } = await Requester.__getData(Constants.URL.ttsResults(this.username), Util.__getHeaders(this.client));
        const group = new Group();
        results.forEach(r => {
            let result = this.client.results.__add(r);
            group.set(result.token, result);
        });
        return group;
    };
    async ttsModels() {
        const { models } = await Requester.__getData(Constants.URL.ttsModels(this.username), Util.__getHeaders(this.client));
        const group = new Group();
        models.forEach(r => {
            let model = this.client.models.__add(r);
            group.set(model.token, model);
        });
        return group;
    };
    async fetch() {
        const login = await Requester.__getData(Constants.URL.session, Util.__getHeaders(this.client));
        const { user } = await Requester.__getData(Constants.URL.profile(this.username), Util.__getHeaders(this.client));
        this.client.user = new ClientUser(this.client, Object.assign(login.user, user));
        return this.client.user;
    };
}

module.exports = ClientUser;