import { eCoin } from '../enums/enums';
export declare class Cryptocurrency {
    protected static coin: string;
    static get(): string;
    static set(coin: eCoin): void;
}
