const kCode = Symbol('code');
const Util = require('./Util');
const capitalize = (string) => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

class FakeYouError extends Error {
    constructor(c, data, server) {
        super(data);
        this.name = 'FakeYouError';
        this.message = Util.checkType(data, "string") ? capitalize(data) : 'Unknown error';
        this[kCode] = Util.checkType(c, 'object') ? c.constructor.name : c.name ?? "Unknown";
        this.isfromAPI = Boolean(server);
        Error.captureStackTrace(this, FakeYouError);
    };
};

module.exports = FakeYouError;