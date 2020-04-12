"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigLengthException extends Error {
    constructor() {
        super('ConfigLength');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.ConfigLengthException = ConfigLengthException;
class ConfigOutOfRangeException extends Error {
    constructor() {
        super('ConfigOutOfRange');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.ConfigOutOfRangeException = ConfigOutOfRangeException;
class EnvOutOfRangeException extends Error {
    constructor() {
        super('EnvOutOfRange');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.EnvOutOfRangeException = EnvOutOfRangeException;
class NoneExistConfigFileException extends Error {
    constructor(path) {
        super('NoneExistConfigFile: ' + path);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.NoneExistConfigFileException = NoneExistConfigFileException;
//# sourceMappingURL=ConfigLengthException.js.map