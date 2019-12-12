import BN from 'bn.js';
declare class Strip {
    constructor();
    stripHexPrefix(str: string): string;
    isHexPrefixed(str: string): boolean;
    numberToBN(arg: string | number): BN;
}
declare const _default: Strip;
export = _default;
