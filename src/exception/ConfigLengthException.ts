export class ConfigLengthException extends Error {
    constructor() {
        super('ConfigLength');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class ConfigOutOfRangeException extends Error {
    constructor() {
        super('ConfigOutOfRange');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class EnvOutOfRangeException extends Error {
    constructor() {
        super('EnvOutOfRange');
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class NoneExistConfigFileException extends Error {
    constructor(path?: string) {
        super('NoneExistConfigFile: ' + path);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}