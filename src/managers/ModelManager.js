const Group = require("../structures/Group");
const FakeYouError = require("../util/FakeYouError");
const Util = require("../util/Util");
const Constants = require("../util/Constants");
const Requester = require("../util/Requester");
const Model = require("../structures/Model");

class ModelManager {
    constructor(client) {
        this.client = client;
        this.cache = new Group();
    }

    resolve(query) {
        if(!query) throw new FakeYouError(this, Constants.Error.optionNotFound('query'));
        if(query instanceof Model) {
            return query;
        } else {
            if(!Util.checkType(query, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('query', 'string or Model'));
            return this.cache.find(m => 
                Util.verifyValue(m.title, query) || Util.verifyValue(m.name, query) || m.token == query
            )
        }
    };
    __add(data) {
        if(!data) throw new FakeYouError(this, Constants.Error.optionNotFound('data'));
        if(!Util.checkType(data, 'object')) throw new FakeYouError(this, Constants.Error.invalidType('data', 'object'));
        const newModel = new Model(this.client, data);
        const alreadySet = this.cache.get(newModel.token);
        if(Boolean(alreadySet) && !alreadySet.partial) {
            return alreadySet;
        } else {
            this.cache.set(newModel.token, newModel);
        };
        return newModel;
    };

    async fetch(query) {
        if(!query) throw new FakeYouError(this, Constants.Error.optionNotFound('query'));
        if(!Util.isToken(query, 'model')) throw new FakeYouError(this, Constants.Error.invalidToken);
        const { model } = await Requester.__getData(Constants.URL.model(query), Util.__getHeaders(this.client));
        const { categories } = await Requester.__getData(Constants.URL.assignments(query), Util.__getHeaders(this.client));
        const { count } = await Requester.__getData(Constants.URL.model(query)+'/count', Util.__getHeaders(this.client));
        return this.__add(Object.assign(model, { categories: categories, count: count }));
    };
    async __fetchAll() {
        const { models } = await Requester.__getData(Constants.URL.models, Util.__getHeaders(this.client));
        models.forEach(c => {
            return this.__add(c);
        });
        return this.cache;
    }
}

module.exports = ModelManager;