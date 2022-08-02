const Constants = require('../util/Constants.js');
const Requester = require('../util/Requester.js');
const Util = require('../util/Util.js');
const User = require('./User.js');

class TTSResult {
    constructor(client, data) {
        this.client = client;
        this.token = data.tts_result_token ?? data.maybe_result_token;
        this.userToken = data.maybe_creator_user_token ?? null;
        this.user = Boolean(this.userToken) ? new User(this.client, Util.userPartialData(data)) : null;
        this.attempts = data.attempt_count ?? 0;
        this.audioPath = data.maybe_public_bucket_wav_audio_path ?? data.public_bucket_wav_audio_path ?? null;
        this.spectrogramPath = data.public_bucket_spectrogram_path ?? null;
        this.modelToken = data.model_token ?? data.tts_model_token;
        this.model = Boolean(this.modelToken) ? client.models.cache.get(this.modelToken) ?? client.models.__add(Util.modelPartialData(data)) : null;
        this.text = data.raw_inference_text;
        this.type = "tts";
        this.createdAt = new Date(data.created_at);
        this.updatedAt = new Date(data.updated_at);
        this.duration = data.duration_millis ?? null;
        this.size = data.file_size_bytes ?? null;
        this.setVisibility = data.creator_set_visibility ?? null;
        this.worker = data.generated_by_worker ?? null;
        this.vocoder = data.maybe_pretrained_vocoder_used ?? null;
    };

    get partial() {
        return !Boolean(this.spectrogramPath && this.size && this.duration);
    };
    get createdTimestamp() {
        return Math.floor(this.createdAt.getTime() / 1000);
    };
    get updatedTimestamp() {
        return Math.floor(this.updatedAt.getTime() / 1000);
    };

    isVisible() {
        if(!Boolean(this.setVisibility)) return null;
        return this.setVisibility == "public" ? true : false;
    };
    audioURL() {
        return Boolean(this.audioPath) ? Constants.URL.cdn + this.audioPath : null;
    };
    spectrogramURL() {
        return Boolean(this.spectrogramPath) ? Constants.URL.cdn + this.spectogramPath : null; 
    };
    resultURL() {
        return Boolean(this.token) ? `${Constants.URL.webPage}/tts/result/${this.resultToken}` : null;
    }
    async getAudio() {
        if(!this.audioPath) return null;
        const buffer = await Requester.__getData(this.audioURL(), {});
        return buffer;
    };
    async getSpectrogram() {
        if(!this.spectrogramPath) return null;
        let data = await Requester.__getData(this.spectrogramURL(), {});
        const specData = {
            mel: data.mel,
            melScaled: data.mel_scaled
        };
        return specData;
    }
    async fetch() {
        return await this.client.results.fetch(this.token);
    }
};

module.exports = TTSResult;