const Group = require('./Group');
const FakeYouError = require('../util/FakeYouError');
const Util = require('../util/Util');
const Constants = require('../util/Constants');

class Badges {
    constructor(client, user, data) {
        this.client = client;
        this.user = user;
        this.group = new Group();
        this.__patchData(data);
    };

    any(options) {
        let array = this.toArray();
        if(Array.isArray(options)) {
            return options.some(e => array.includes(e));
        } else {
            if(!Util.checkType(options, 'string')) throw new FakeYouError(Constants.Error.invalidType('options', 'string or array<string>'));
            return this.has(options);
        }
    };
    has(options) {
        let array = this.toArray();
        if(Array.isArray(options)) {
            return options.every(e => array.includes(e));
        } else {
            if(!Util.checkType(options, 'string')) throw new FakeYouError(Constants.Error.invalidType('options', 'string or array<string>'));
            return array.includes(options);
        }
    };
    toArray() {
        return this.group.map(c => c.slug);
    };
    __patchData(data) {
        data.forEach(b => {
            const item = {
                title: b.title,
                slug: b.slug,
                description: b.description,
                imageURL: Boolean(b.image_url) ? b.image_url : null,
                createdAt: new Date(b.granted_at)
            };
            this.group.set(item.slug, item)
        })
    };
}

module.exports = Badges;