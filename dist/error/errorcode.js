"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eErrorCode;
(function (eErrorCode) {
    eErrorCode[eErrorCode["Success"] = 0] = "Success";
    eErrorCode[eErrorCode["Undefined"] = 1] = "Undefined";
    eErrorCode[eErrorCode["API"] = 100] = "API";
    eErrorCode[eErrorCode["FailCreatedAddress"] = 101] = "FailCreatedAddress";
    eErrorCode[eErrorCode["AlreadyHasEthAddress"] = 102] = "AlreadyHasEthAddress";
    eErrorCode[eErrorCode["NoneExistCoinAddress"] = 103] = "NoneExistCoinAddress";
    eErrorCode[eErrorCode["NotEnoughBalance"] = 104] = "NotEnoughBalance";
    eErrorCode[eErrorCode["NoneExistWithdrawToken"] = 105] = "NoneExistWithdrawToken";
    eErrorCode[eErrorCode["InvalidWithdrawToken"] = 106] = "InvalidWithdrawToken";
    eErrorCode[eErrorCode["Internal"] = 500] = "Internal";
    eErrorCode[eErrorCode["Web3Error"] = 900] = "Web3Error";
    eErrorCode[eErrorCode["DbError"] = 1000] = "DbError";
})(eErrorCode = exports.eErrorCode || (exports.eErrorCode = {}));
//# sourceMappingURL=errorcode.js.map