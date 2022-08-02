const uuid = require('uuid');
const FakeYouError = require('../util/FakeYouError.js');
const Constants = require('../util/Constants.js');
const Util = require("../util/Util");
const User = require('./User.js');
const Requester = require('../util/Requester.js');

class Model {
    constructor(client, data) {
        this.client = client;
        this.token = data.model_token;
        this.title = data.title;
        this.name = data.maybe_suggested_unique_bot_command;
        this.description = Boolean(data.description_markdown) ? data.description_markdown : null;
        this.categoryTokens = data.category_tokens ?? data.categories.map(c => c.category_token) ?? null;
        this.category = Util.isNotEmptyObj(this.categoryTokens) ? this.client.categories.cache.filter(c => this.categoryTokens.includes(c.token)) : null;
        this.type = data.model_type ?? data.tts_model_type;
        this.userToken = data.creator_user_token;
        this.user = Boolean(this.userToken) ? new User(this.client, Util.userPartialData(data)) : null;
        this.locale = data.ietf_language_tag ?? null;
        this.lang = data.ietf_primary_language_subtag ?? null;
        this.createdAt = Boolean(data.created_at) ? new Date(data.created_at) : null;
        this.updatedAt = Boolean(data.updated_at) ? new Date(data.updated_at) : null;
        this.pipeline = data.text_pipeline_type_guess ?? null;
        this.vocoder = data.maybe_default_pretrained_vocoder ?? null;
        this.algorithm = data.text_preprocessing_algorithm ?? null;
        this.setVisibility = data.creator_set_visibility ?? null;
        this.count = data.count ?? null;
        this.features = {
            frontPageFeatured: data.is_front_page_featured ?? null,
            twitchFeatured: data.is_twitch_featured ?? null,
            lockedfromUse: data.is_locked_from_use ?? null,
            lockedfromUserModification: data.is_locked_from_user_modification ?? null
        };
    };

    get partial() {
        return !Boolean(this.setVisibility && (this.locale && this.lang));
    };
    get createdTimestamp() {
        return Boolean(this.createdAt) ? Math.floor(this.createdAt.getTime() / 1000) : null;
    };
    get updatedTimestamp() {
        return Boolean(this.updatedAt) ? Math.floor(this.updatedAt.getTime() / 1000) : null;
    };

    isVisible() {
        if(!Boolean(this.setVisibility)) return null;
        return this.setVisibility == "public" ? true : false;
    };
    modelURL() {
        return `${Constants.URL.webPage}/tts/${this.token}`;
    };
    async request(text) {
        if(!Util.checkType(text, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('text', 'string'));
        let alreadyResult = this.client.results.cache.find(
            v => v.text.toLowerCase() == text.toLowerCase() && v.modelToken == this.token
        );
        if(Boolean(alreadyResult)) return alreadyResult;
        let postData = await Requester.__postData(Constants.URL.inference, { 
            "tts_model_token": this.token, 
            "inference_text": text,
            "uuid_idempotency_token": uuid.v4()
        }, Util.__getHeaders(this.client));
        const getData = await Requester.__createResult(this.client, postData.inference_job_token);
        return this.client.results.__add(getData);
    };
    async fetch() {
        return await this.client.models.fetch(this.token);
    }
};

module.exports = Model;