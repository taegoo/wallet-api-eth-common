import { eErrorCode } from '..';
export interface IResponse {
}
/**
 * Response Payload 인터페이스
 */
export interface IPayload {
}
/**
 * Response 구현 객체
 */
export declare class Response implements IResponse {
    error: string;
    msg: string;
    payload: IPayload | undefined;
    constructor(rt?: eErrorCode);
    to(payload: IPayload): this;
}
