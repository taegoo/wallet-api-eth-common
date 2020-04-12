"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UndefiendEntityException extends Error {
    constructor() {
        super('UndefiendEntity');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.UndefiendEntityException = UndefiendEntityException;
class CalcLessThanException extends Error {
    constructor() {
        super('CalcLessThan');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.CalcLessThanException = CalcLessThanException;
//# sourceMappingURL=UndefiendEntityException.js.map