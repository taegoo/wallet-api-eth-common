import { eErrorCode, LayerResult } from '..';

export interface IResponse {

}

/**
 * Response Payload 인터페이스
 */
export interface IPayload {
    // initialize(rt: LayerResult): IPayload;
}

/**
 * Response 구현 객체
 */
export class Response implements IResponse {
    error: string;
    msg: string;
    payload: IPayload | undefined;

    constructor(rt: eErrorCode = eErrorCode.Success) {
        if (typeof rt === 'number') {
            this.error = `${rt}`;
            this.msg = eErrorCode[rt];
        } else {
            this.error = `${eErrorCode.Undefined}`;
            this.msg = eErrorCode[eErrorCode.Undefined];
        }
    }

    to(payload: IPayload) {
        this.payload = payload;
        return this;
    }
}
