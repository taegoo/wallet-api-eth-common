export class UndefiendEntityException extends Error {
    constructor() {
        super('UndefiendEntity');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}


export class CalcLessThanException extends Error {
    constructor() {
        super('CalcLessThan');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
