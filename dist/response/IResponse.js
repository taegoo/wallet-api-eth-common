"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
/**
 * Response 구현 객체
 */
class Response {
    constructor(rt = __1.eErrorCode.Success) {
        if (typeof rt === 'number') {
            this.error = `${rt}`;
            this.msg = __1.eErrorCode[rt];
        }
        else {
            this.error = `${__1.eErrorCode.Undefined}`;
            this.msg = __1.eErrorCode[__1.eErrorCode.Undefined];
        }
    }
    to(payload) {
        this.payload = payload;
        return this;
    }
}
exports.Response = Response;
//# sourceMappingURL=IResponse.js.map