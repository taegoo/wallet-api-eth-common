export class NoneExistAddressException extends Error {
    constructor() {
        super('NoneExistAddress');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
