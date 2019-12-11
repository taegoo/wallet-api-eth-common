
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#example
export class WhiteSpaceException extends Error {
    constructor() {
        super('hasWhiteSpace'); // 'Error' breaks prototype chain here
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }
}