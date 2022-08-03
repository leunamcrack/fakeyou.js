const Requester = require('../util/Requester.js');
const Util = require('../util/Util.js');
const Badges = require("./Badges.js");
const Constants = require("../util/Constants.js");
const FakeYouError = require('../util/FakeYouError.js');

class User {
    constructor(client, data) {
        this.client = client;
        this.token = data.creator_user_token ?? data.user_token;
        this.username = data.creator_username ?? data.username;
        this.displayName = data.creator_display_name ?? data.display_name;
        this.gravatarHash = data.gravatar_hash ?? data.email_gravatar_hash;
        this.createdAt = Boolean(data.created_at) ? new Date(data.created_at) : null;
        this.badges = Util.isNotEmptyObj(data.badges) ? new Badges(this.client, this, data.badges) : null;
        this.description = data.profile_markdown ?? null;
        this.links = {};
        this.ttsVisibility = data.preferred_tts_result_visibility ?? null;
        this.w2lVisibility = data.preferred_w2l_result_visibility ?? null;
        this.__patchOptions(data);
    };

    get partial() {
        return !Boolean(this.createdAt && (this.ttsVisibility && this.w2lVisibility));
    };
    get createdTimestamp() {
        return Boolean(this.createdAt) ? Math.floor(this.createdAt.getTime() / 1000) : null;
    };

    isVisible(isw2l) {
        if(!Util.checkType(isw2l, 'boolean', true)) throw new FakeYouError(Constants.Error.invalidOption('isw2l', 'boolean'));
        if(w2l) {
            if(Boolean(this.w2lVisibility)) return null;
            return this.w2lVisibility == 'public' ? true : false;
        } else {
            if(Boolean(this.ttsVisibility)) return null;
            return this.ttsVisibility == 'public' ? true : false;
        }
    };
    gravatarURL() {
        return Constants.URL.gravatar + this.gravatarHash;
    };
    profileURL() {
        return `${Constants.URL.webPage}/profile/${this.username}`;
    };
    __patchOptions(data) {
        const links = this.links; 
        links.twitter = data.twitter_username ?? null;
        links.discord = data.discord_username ?? null;
        links.github = data.github_username ?? null;
        links.twitch = data.twitch_username ?? null;
        links.patreon = data.patreon_username ?? null;
        links.cashapp = data.cashapp_username ?? null;
        links.website = data.website_url ?? null;
        return this;
    };

    async fetch() {
        const { user } = await Requester.__getData(Constants.URL.profile(this.username), Util.__getHeaders(this.client));
        return new User(this.client, user);
    }
};

module.exports = User;