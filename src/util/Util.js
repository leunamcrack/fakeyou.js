const Constants = require('./Constants');

class Util {
    static isToken(query, type = 'user') {
        let regexp = Constants.RegExp[type];
        return regexp.test(query);
    }
    static verifyValue(value, data) {
        if(!value || !data) return value == data;
        return value.toLowerCase() == data.toLowerCase() || value.toLowerCase().includes(data.toLowerCase());
    }
    static checkType(value, type, opt) {
        if(opt && value == undefined) return true;
        return typeof value == type || value.constructor.name == type;
    }
    static isNotEmptyObj(data) {
        if(data == undefined) {
            return false;
        } else if(Array.isArray(data)) {
            if(data.length <= 0) return false;
            if(!data.every(i => this.isNotEmptyObj(i))) return false;
        } else if(data.constructor == Object) {
            if(!this.isNotEmptyObj(Object.keys(data))) return false;
            for(const k of Object.keys(data)) {
                if(!this.isNotEmptyObj(data[k])) return false;
            }
        }
        return true; 
    }
    static userPartialData(data) {
        const options = {
            "username": data.maybe_creator_username ?? data.creator_username,
            "display_name": data.maybe_creator_display_name ?? data.creator_display_name,
            "user_token": data.maybe_creator_user_token ?? data.creator_user_token,
            "gravatar_hash": data.maybe_creator_gravatar_hash ?? data.creator_gravatar_hash,
        }
        return options;
    }
    static modelPartialData(data) {
        const options = {
            "model_token": data.tts_model_token,
            "title": data.tts_model_title,
            "creator_username": data.maybe_model_creator_username,
            "creator_user_token": data.maybe_model_creator_user_token,
            "creator_display_name": data.maybe_model_creator_display_name,
            "creator_gravatar_hash": data.maybe_model_creator_gravatar_hash,
        }
        return options;
    }
    static __isNotChanges(data, newData) {
        const arrayOptions = [['cashapp', 'discord', 'github', 'patreon',
        'twitter', 'twitch', 'website'], ['ttsVisibility', 'w2lVisibility']];
        for(const key in newData) {
            if(arrayOptions[0].includes(key)) {
                if(data[key] !== newData[key]) return false;
            }
            if(arrayOptions[0].includes(key)) {
                if(Boolean(data[key]) !== Boolean(newData[key])) return false;
            }
        }
        return true;
    }
    static __getHeaders(client) {
        let options = {};
        if(client.session.token) {
            options['Authorization'] = client.token;
        }
        if(client.session.auth) {
            options['Cookie'] = `session=${client.session.auth}`;
        }
        return options;
    }
};

module.exports = Util;