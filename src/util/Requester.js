const request = require('superagent');
const Constants = require('./Constants.js');
const FakeYouError = require('./FakeYouError.js');
const Util = require('./Util.js');

class Requester extends null {
    static async __getData(url, headers) {
        try {
            const { body } = await request.get(url).set(headers);
            return body;
        } catch (e) {
            if(!e.response || !e.response.body) throw new FakeYouError(this, Constants.Error.webUnavailable, true);
            if(e.response.body.success == false) {
                throw new FakeYouError(this, e.response.body.error_message ?? e.response.body.error_reason, true);
            }
            throw new FakeYouError(this, e.message, true);
        }
    };
    static async __postData(url, data, headers) {
        try {
            const { body } = await request.post(url).send(data).set(headers);
            return body;
        } catch (e) {
            if(!e.response || !e.response.body) throw new FakeYouError(this, Constants.Error.webUnavailable, true);
            if(e.response.body.success == false) {
                throw new FakeYouError(this, e.response.body.error_message ?? e.response.body.error_reason, true);
            }
            throw new FakeYouError(this, e.message, true);
        }
    };
    static async __login(client) {
        const options = {
            "username_or_email": client.session.usernameOrEmail,
            "password": client.session.password
        };
        try {
            const { body, headers } = await request.post(Constants.URL.login).send(options);
            if(body.success == true) {
                client.session.auth = headers["set-cookie"][0].match(/^\w+.=([^;]+)/)[1];
                client.session.password = null;
            }
        } catch (e) {
            if(!e.response || !e.response.body) throw new FakeYouError(this, Constants.Error.webUnavailable, true);
            if(e.response.body.success == false) {
                throw new FakeYouError(this, e.response.body.error_message ?? e.response.body.error_reason, true);
            }
            throw new FakeYouError(this, e.message, true);
        }
        return this.__session(client);
    };
    static async __session(client) {
        const cookie = client.session.auth;
        if(!cookie) throw new FakeYouError(this, Constants.Error.notCredentials('auth'));
        const { logged_in, user } = await this.__getData(Constants.URL.session, Util.__getHeaders(client));
        if(logged_in && Boolean(user)) {
            const info = await this.__getData(Constants.URL.profile(user.username), Util.__getHeaders(client));
            return Object.assign(user, info.user);
        }
    };
    static async __editUser(client, data) {
        if(!data) throw new FakeYouError(this, Constants.Error.optionNotFound('data'));
        if(!Util.checkType(data, 'object')) throw new FakeYouError(this, Constants.Error.invalidType('data', 'object'));
        let options = {
            "cashapp_username": data.cashapp,
            "discord_username": data.discord,
            "github_username": data.github,
            "preferred_tts_result_visibility": data.ttsVisibility,
            "preferred_w2l_result_visibility": data.w2lVisibility,
            "profile_markdown": data.description,
            "twitch_username": data.twitch,
            "twitter_username": data.twitter,
            "website_url": data.website
        };
        const { success } = await this.__postData(Constants.URL.editProfile(client.user.username), options, Util.__getHeaders(client));
        if(success) {
            const { user }= await this.__getData(Constants.URL.profile(client.user.username), Util.__getHeaders(client));
            return user;
        };
    }
    static async __createResult(client, token) {
        if(!Util.isToken(token, 'jobToken')) throw new FakeYouError(this, Constants.Error.invalidToken);
        const isReady = (value) => ['complete_success', 'complete_failure', 'dead'].includes(value);
        return await new Promise((resolve, reject) => {
            let interval = setInterval(async () => {
                const { state } = await this.__getData(Constants.URL.job(token), Util.__getHeaders(client));
                if(isReady(state.status)) {
                    clearInterval(interval);
                    if(state.status == 'complete_success') {
                        resolve(state);
                    } else {
                        reject(new FakeYouError(this, Constants.Error.failureResult(token), true));
                    } 
                } 
            }, 1000)
        });
    };
    static async __getAudio(url) {
        const { body } = await request.get(url);
        return body;
    }
    static async __getSpec(url) {
        const { mel } = await this.__getData(url, {});
        return mel;
    }
};

module.exports = Requester;