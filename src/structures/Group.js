const FakeYouError = require("../util/FakeYouError");
const Util = require("../util/Util");

class Group extends Map {
    first() {
        return this.values().next().value;
    };
    last() {
        return [...this.values()].reverse()[0];
    };
    some(fn, arg) {
        if(!Util.checkType(fn, 'function')) throw new FakeYouError(this, Constants.Error.invalideType('fn', 'function'));
        if(arg) {
            fn.bind(arg);
        }
        for (let [key, val] of this) {
            if (fn(val, key, this)) {
                return true;
            }
        }
        return false;
    };
    every(fn, arg) {
        if(!Util.checkType(fn, 'function')) throw new FakeYouError(this, Constants.Error.invalideType('fn', 'function'));
        if(arg) {
            fn.bind(arg);
        }
        for (const [key, val] of this) {
            if (!fn(val, key, this)) {
                return false;
            }
        }
        return true;
    };
    map(fn, arg) {
        if(!Util.checkType(fn, 'function')) throw new FakeYouError(this, Constants.Error.invalideType('fn', 'function'));
        if(arg) {
            fn.bind(arg);
        }
        return Array.from(this.entries(), (u) => {
            let [key, value] = u;
            return fn(value, key, this);
        })
    };
    find(fn, arg) {
        if(!Util.checkType(fn, 'function')) throw new FakeYouError(this, Constants.Error.invalideType('fn', 'function'));
        if(arg) {
            fn.bind(arg);
        }
        for (let [key, value] of this) {
            if(fn(value, key, this)) {
                return value;
            }
        }
        return null;
    };
    filter(fn, arg) {
        if(!Util.checkType(fn, 'function')) throw new FakeYouError(this, Constants.Error.invalideType('fn', 'function'));
        if(arg) {
            fn.bind(arg);
        };
        const results = new this.constructor[Symbol.species]();
        for (let [key, value] of this) {
            if (fn(value, key, this)) {
                results.set(key, value);
            }
        }
        return results;
    };
}

module.exports = Group;