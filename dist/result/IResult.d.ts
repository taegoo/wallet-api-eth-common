import { eErrorCode } from '../error/errorcode';
export declare class LayerResult {
    error: eErrorCode;
    result?: string | boolean | IResult;
}
export interface IResult {
}
/**
 * Wrt : Web3 Result
 */
export declare class RtCreatedAddress implements IResult {
    coin: string;
    privateKey: string;
    address: string;
    uuid: string;
}
/**
 * Wrt : Web3 Result
 */
export declare class RtBalance implements IResult {
    coin: string;
    amount: string;
    unit: string;
}
export declare class RtWallet implements IResult {
    id: number;
    uuid: string;
    address: RtCreatedAddress;
    balance: RtBalance;
}
export declare class RtWithdraw implements IResult {
    coin: string;
    uuid: string;
    amount: string;
    unit: string;
    to: string;
}
export declare class RecordBook {
    walletId: number;
    coin: string;
    type: string;
    toFrom: string;
    total: string;
    amount: string;
    unit: string;
    fee: string;
    commission: string;
    state: string;
    txid: string;
    historyId: number;
}
