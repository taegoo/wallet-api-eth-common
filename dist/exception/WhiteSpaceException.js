"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#example
class WhiteSpaceException extends Error {
    constructor() {
        super('hasWhiteSpace'); // 'Error' breaks prototype chain here
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }
}
exports.WhiteSpaceException = WhiteSpaceException;
//# sourceMappingURL=WhiteSpaceException.js.map