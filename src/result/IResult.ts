import { eErrorCode } from '../error/errorcode';

export class LayerResult {
    public error: eErrorCode;
    public result?: string | boolean | IResult;
}

export interface IResult {

}

/**
 * Wrt : Web3 Result
 */
export class RtCreatedAddress implements IResult {
    public coin: string;
    public privateKey: string;
    public address: string;
    public uuid: string;
}

/**
 * Wrt : Web3 Result
 */
export class RtBalance implements IResult {
    public coin: string;
    public amount: string;
    public unit: string;
}

export class RtWallet implements IResult {
    public id: number;
    public uuid: string;
    public address: RtCreatedAddress;
    public balance: RtBalance;
}

export class RtWithdraw implements IResult {
    public coin: string;
    public uuid: string;
    public amount: string;
    public unit: string;
    public to: string;
}


export class RecordBook {
    public walletId: number;
    public coin: string;
    public type: string;
    public toFrom: string;
    public total: string;
    public amount: string;
    public unit: string;
    public fee: string;
    public commission: string;
    public state: string;
    public txid: string;

    public historyId: number;
}