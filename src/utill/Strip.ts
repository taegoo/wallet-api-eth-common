import BN from 'bn.js';

class Strip {
    constructor() { }

    stripHexPrefix(str: string): string {
        if (typeof str !== 'string') {
            return str;
        }

        return this.isHexPrefixed(str) ? str.slice(2) : str;
    }

    isHexPrefixed(str: string): boolean {
        if (typeof str !== 'string') {
            throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + (typeof str) + ', while checking isHexPrefixed.');
        }

        return str.slice(0, 2) === '0x';
    }

    numberToBN(arg: string | number) {
        if (typeof arg === 'string' || typeof arg === 'number') {
            let multiplier = new BN(1);
            const formattedString = String(arg).toLowerCase().trim();
            const isHexPrefixed = formattedString.substr(0, 2) === '0x' || formattedString.substr(0, 3) === '-0x';
            let stringArg = this.stripHexPrefix(formattedString);
            if (stringArg.substr(0, 1) === '-') {
                stringArg = this.stripHexPrefix(stringArg.slice(1));
                multiplier = new BN(-1, 10);
            }
            stringArg = stringArg === '' ? '0' : stringArg;

            if ((!stringArg.match(/^-?[0-9]+$/) && stringArg.match(/^[0-9A-Fa-f]+$/))
                || stringArg.match(/^[a-fA-F]+$/)
                || (isHexPrefixed === true && stringArg.match(/^[0-9A-Fa-f]+$/))) {
                return new BN(stringArg, 16).mul(multiplier);
            }

            if ((stringArg.match(/^-?[0-9]+$/) || stringArg === '') && isHexPrefixed === false) {
                return new BN(stringArg, 10).mul(multiplier);
            }
        }

        throw new Error('[number-to-bn] while converting number ' + JSON.stringify(arg) + ' to BN.js instance, error: invalid number value. Value must be an integer, hex string, BN or BigNumber instance. Note, decimals are not supported.');
    }
}

export = new Strip();