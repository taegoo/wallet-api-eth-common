import { IConfig } from './IConfig';
export declare class Web3Coinfig implements IConfig {
    infura: {
        ep: string;
        ws: string;
    };
    fastnode: {
        ep: string;
        ws: string;
    };
    coldWallet: string;
}
