const User = require("./User");
const Group = require('./Group');
const FakeYouError = require('../util/FakeYouError');
const Util = require('../util/Util');
const Constants = require('../util/Constants');

class LeaderBoard {
    constructor(client, data) {
        this.client = client;
        this.group = new Group();
        this.__patchData(data);
    }

    tts() {
        return this.group.filter(i => i.type == 'tts');
    };
    w2l() {
        return this.group.filter(i => i.type == 'w2l');
    };
    getPosition(position, isw2l) {
        if(!position) throw new FakeYouError(this, Constants.Error.optionNotFound('position'));
        if(!Util.checkType(position, 'number')) throw new FakeYouError(this, Constants.Error.invalidType('position', 'number'));
        if(!isw2l) isw2l = false;
        if(!Util.checkType(isw2l, 'boolean')) throw new FakeYouError(this, Constants.Error.invalidType('isw2l', 'boolean'));
        return this.group.find(i => i.position == position && (isw2l ? i.type == 'w2l' : i.type == 'tts')) ?? null;
    };
    toArray() {
        return [
            this.tts().map(i => `${i.user.username} - ${i.count}`), 
            this.w2l().map(i => `${i.user.username} - ${i.count}`)
        ];
    };
    __patchData(data) {
        if("tts_leaderboard" in data) {
            data.tts_leaderboard.forEach((w, i) => {
                const item = {
                    position: ++i,
                    user: new User(this.client, w),
                    type: 'tts',
                    count: w.uploaded_count
                };
                this.group.set(item.user.token, item);
            })
        };
        if("w2l_leaderboard" in data) {
            data.w2l_leaderboard.forEach((w, i) => {
                const item = {
                    position: ++i,
                    user: new User(this.client, w),
                    type: 'w2l',
                    count: w.uploaded_count
                };
                this.group.set(item.user.token, item);
            })
        };
    }
}

module.exports = LeaderBoard;