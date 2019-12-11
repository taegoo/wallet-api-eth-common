import { eCoin } from '../enums/enums';

export class Cryptocurrency {
    protected static coin: string;

    static get() {
        return this.coin;
    }

    static set(coin: eCoin) {
        this.coin = coin as string;
    }
}