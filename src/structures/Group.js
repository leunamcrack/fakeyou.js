const FakeYouError = require("../util/FakeYouError");
const Util = require("../util/Util");
const Constants = require('../util/Constants');

class Group extends Map {
    first(count) {
        if(count == undefined) {
            return this.values().next().value;
        } else {
            if(!Util.checkType(count, 'number')) throw new FakeYouError(Constants.Error.invalidType('count', 'number'))
            if(count == 0) return this.last(1);
            else if(count < 0) return this.last(Math.abs(count));
            else {
                count = Math.min(this.size, count);
                return Array.from({ length: count }, () => 
                    this.values().next().value
                );
            }
        }
    };
    last(count) {
        let array = [...this.values()].reverse()
        if(count == undefined) {
            return array[0];
        } else {
            if(!Util.checkType(count, 'number')) throw new FakeYouError(Constants.Error.invalidType('count', 'number'))
            if(count == 0) return this.first(1);
            else if(count < 0) return this.first(Math.abs(count));
            else {
                count = Math.min(this.size, count);
                return array.slice(0, count);
            }
        }
    };
    some(fn, arg) {
        if(!Util.checkType(fn, 'function')) throw new FakeYouError(this, Constants.Error.invalidType('fn', 'function'));
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
        if(!Util.checkType(fn, 'function')) throw new FakeYouError(this, Constants.Error.invalidType('fn', 'function'));
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
        if(!Util.checkType(fn, 'function')) throw new FakeYouError(this, Constants.Error.invalidType('fn', 'function'));
        if(arg) {
            fn.bind(arg);
        }
        return Array.from(this.entries(), (u) => {
            let [key, value] = u;
            return fn(value, key, this);
        })
    };
    find(fn, arg) {
        if(!Util.checkType(fn, 'function')) throw new FakeYouError(this, Constants.Error.invalidType('fn', 'function'));
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
        if(!Util.checkType(fn, 'function')) throw new FakeYouError(this, Constants.Error.invalidType('fn', 'function'));
        if(arg) {
            fn.bind(arg);
        };
        const results = new Group();
        for (let [key, value] of this) {
            if (fn(value, key, this)) {
                results.set(key, value);
            }
        }
        return results;
    };
    toArray() {
        return [...this.values()];
    }
}

module.exports = Group;