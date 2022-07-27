const Group = require("../structures/Group");
const FakeYouError = require("../util/FakeYouError");
const Util = require("../util/Util");
const Constants = require("../util/Constants");
const Requester = require("../util/Requester");
const Category = require("../structures/Category");

class CategoryManager {
    constructor(client) {
        this.client = client;
        this.cache = new Group();
    }

    resolve(query) {
        if(!query) throw new FakeYouError(this, Constants.Error.optionNotFound('query'));
        if(query instanceof Category) {
            return query;
        } else {
            if(!Util.checkType(query, 'string')) throw new FakeYouError(this, Constants.Error.invalidType('query', 'string or Category'));
            return this.cache.find(m => 
                Util.verifyValue(m.title, query) ?? Util.verifyValue(m.name, query) ?? m.token == query
            )
        }
    };
    __add(data) {
        if(!data) throw new FakeYouError(this, Constants.Error.optionNotFound('data'));
        if(!Util.checkType(data, 'object')) throw new FakeYouError(this, Constants.Error.invalidType('data', 'object'));
        const newCategory = new Category(this.client, data);
        const alreadySet = this.cache.get(newCategory.token);
        if(Boolean(alreadySet) && !alreadySet.partial) {
            return alreadySet;
        } else {
            this.cache.set(newCategory.token, newCategory);
        }
        return newCategory;
    };

    async __fetchAll() {
        const { categories } = await Requester.__getData(Constants.URL.categories, Util.__getHeaders(this.client));
        categories.forEach(c => {
            return this.__add(c);
        });
        return this.cache;
    }
}

module.exports = CategoryManager;