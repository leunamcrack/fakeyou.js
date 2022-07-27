const Group = require("../structures/Group");
const FakeYouError = require("../util/FakeYouError");
const Util = require("../util/Util");
const Constants = require("../util/Constants");
const Requester = require("../util/Requester");
const Result = require("../structures/Result");

class ModelManager {
    constructor(client) {
        this.client = client;
        this.cache = new Group();
    }

    resolve(query) {
        if(!query) throw new FakeYouError(this, Constants.Error.optionNotFound('query'));
        if(query instanceof Result) {
            return query;
        } else {
            if(!Util.checkType(query, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('query', 'string or Result'));
            return this.cache.find(m => 
                Util.verifyValue(m.text, query) ?? m.token == query
            )
        }
    };
    __add(data) {
        if(!data) throw new FakeYouError(this, Constants.Error.optionNotFound('data'));
        if(!Util.checkType(data, 'object')) throw new FakeYouError(this, Constants.Error.invalidType('data', 'object'));
        const newResult = new Result(this.client, data);
        const alreadySet = this.cache.get(newResult.token);
        if(Boolean(alreadySet) && !alreadySet.partial) {
            return alreadySet;
        } else {
            this.cache.set(newResult.token, newResult);
        };
        return newResult;
    };

    async fetch(query) {
        if(!query) throw new FakeYouError(this, Constants.Error.optionNotFound('query'));
        if(!Util.isToken(query, 'resultToken')) throw new FakeYouError(this, Constants.Error.invalidToken);
        const { result } = await Requester.__getData(Constants.URL.result(query), Util.__getHeaders(this.client));   
        return this.__add(result);
    };
}

module.exports = ModelManager;