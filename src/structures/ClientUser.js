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

    async edit(data) {
        if(!data) throw new FakeYouError(this, Constants.Error.optionNotFound('data'));
        if(!Util.checkType(data, 'object')) throw new FakeYouError(this, Constants.Error.invalidType('data', "object"));
        if(!Util.isNotEmptyObj(this.__patchUserData(data, true))) return this;;
        const newData = await Requester.__editUser(this.client, this.__patchUserData(data));
        const newClientUser = new ClientUser(this.client, newData);
        this.client.user = newClientUser;
        return newClientUser;
    };
    async ttsResults() {
        const { results } = await Requester.__getData(Constants.URL.ttsResults(this.username), Util.__getHeaders(this.client));
        const group = new Group();
        results.forEach(r => {
            let result = this.client.results.__add(r);
            group.set(result.token, result);
        });
        return Boolean(results.length) ? group : null;
    }
    async ttsModels() {
        const { models } = await Requester.__getData(Constants.URL.ttsModels(this.username), Util.__getHeaders(this.client));
        const group = new Group();
        models.forEach(r => {
            let model = this.client.models.__add(r);
            group.set(model.token, model);
        });
        return Boolean(models.length) ? group : null;
    }
    __patchUserData(data) {
        let options = {}, parsedOptions = {};
        if('description' in data) {
            if(!Util.checkType(data.description, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('description', "string"));
            if(data.description.length > 4096) throw new FakeYouError(this, Constant.Error.stringLength('description', 4096));
            options.description = data.description;
            parsedOptions.description = true;
        } else {
            options.description = this.description ?? "";
        }
        if('twitter' in data) {
            if(!Util.checkType(data.twitter, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('twitter', "string"));
            if(!Constants.RegExp.twitter.test(data.twitter)) throw new FakeYouError(this, Constant.Error.invalidOption('twitter'));
            options.twitter = data.twitter;
            parsedOptions.twitter = true;
        } else {
            options.twitter = null;
        }
        if('discord' in data) {
            if(!Util.checkType(data.discord, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('discord', "string"));
            if(!Constants.RegExp.discord.test(data.discord)) throw new FakeYouError(this, Constant.Error.invalidOption('discord'));
            options.discord = data.discord;
            parsedOptions.discord = true;
        } else {
            options.discord = this.discord ?? "";
        }
        if('twitch' in data) {
            if(!Util.checkType(data.twitch, "string")) throw new FakeYouError(this, Constants.Error.invalidType('twitch', "string"));
            if(!Constants.RegExp.twitch.test(data.twitch)) throw new FakeYouError(this, Constant.Error.invalidOption('twitch'));
            options.twitch = data.twitch;
            parsedOptions.twitch = true;
        } else {
            options.twitch = this.twitch ?? "";
        }
        if('cashapp' in data) {
            if(!Util.checkType(data.cashapp, "string")) throw new FakeYouError(this, Constants.Error.invalidType('cashapp', "string"));
            if(!Constants.RegExp.cashapp.test(data.cashapp)) throw new FakeYouError(this, Constant.Error.invalidOption('cashapp'));
            options.cashapp = data.cashapp;
            parsedOptions.cashapp = true;
        } else {
            options.cashapp = this.cashapp ?? "";
        }
        if('github' in data) {
            if(!Util.checkType(data.github, "string")) throw new FakeYouError(this, Constants.Error.invalidType('github', "string"));
            if(!Constants.RegExp.github.test(data.github)) throw new FakeYouError(this, Constant.Error.invalidOption('github'));
            options.github = data.github;
            parsedOptions.github = true;
        } else {
            options.github = this.github ?? "";
        }
        if('website' in data) {
            if(!Util.checkType(data.website, "string")) throw new FakeYouError(this, Constants.Error.invalidType('website', "string"));
            if(!Constants.RegExp.website.test(data.website)) throw new FakeYouError(this, Constant.Error.invalidOption('website'));
            options.website = data.website;
            parsedOptions.website = true;
        } else {
            options.website = this.website ?? "";
        }
        if("ttsVisibility" in data) {
            if(!Util.checkType(data.ttsVisibility, 'boolean')) throw new FakeYouError(this, Constants.Error.invalidType('tts visibility', "boolean"));
            if(Boolean(data.ttsVisibility)) {
                options.ttsVisibility = "public";
                parsedOptions.ttsVisibility = true;
            } else {
                options.ttsVisibility = "hidden";
                parsedOptions.ttsVisibility = true;
            }
        } else {
            options.ttsVisibility = this.ttsVisibility;
        }
        if("w2lVisibility" in data) {
            if(!Util.checkType(data.w2lVisibility, 'boolean')) throw new FakeYouError(this, Constants.Error.invalidType('w2l visibility', "boolean"));
            if(Boolean(data.w2lVisibility)) {
                options.w2lVisibility = "public";
                parsedOptions.w2lVisibility = true;
            } else {
                options.w2lVisibility = "hidden";
                parsedOptions.w2lVisibility = true;
            }
        } else {
            options.w2lVisibility = this.w2lVisibility;
        }
        if(Boolean(isParsed)) return parsedOptions;
        return options;
    };
}

module.exports = ClientUser;