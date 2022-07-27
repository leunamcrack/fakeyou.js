const Constants = require("../util/Constants.js");
const Requester = require('../util/Requester.js');
const Util = require('../util/Util.js');
const Badges = require("./Badges.js");
const Model = require("./Model.js");

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
        this.twitter = data.twitter_username ?? null;
        this.discord = data.discord_username ?? null;
        this.github = data.github_username ?? null;
        this.twitch = data.twitch_username ?? null;
        this.patreon = data.patreon_username ?? null;
        this.cashapp = data.cashapp_username ?? null;
        this.website = data.website_url ?? null;
        this.ttsVisibility = data.preferred_tts_result_visibility ?? null;
        this.w2lVisibility = data.preferred_w2l_result_visibility ?? null;
    };

    get partial() {
        return !Boolean(this.createdAt && (this.ttsVisibility && this.w2lVisibility));
    };
    get isVisibleTTS() {
        return this.ttsVisibility == "public" ? true : Util.checkType(this.ttsVisibility, 'boolean') ? false : null;
    };
    get isVisibleW2L() {
        return this.w2lVisibility == "public" ? true : Util.checkType(this.w2lVisibility, 'boolean') ? false : null;
    };
    get createdTimestamp() {
        return this.createdAt.getTime();
    };   
    
    gravatarURL() {
        return Boolean(this.gravatarHash) ? Constants.URL.gravatar + this.gravatarHash : null;
    }
    profileURL() {
        return `${Constants.URL.webPage}/profile/${this.username}`;
    }
    async fetch() {
        const { user } = await Requester.__getData(Constants.URL.profile(this.username), Util.__getHeaders(this.client));
        return new User(this.client, user);
    }
};

module.exports = User;