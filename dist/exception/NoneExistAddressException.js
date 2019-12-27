"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NoneExistAddressException extends Error {
    constructor() {
        super('NoneExistAddress');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.NoneExistAddressException = NoneExistAddressException;
//# sourceMappingURL=NoneExistAddressException.js.map