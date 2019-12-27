"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eCoin;
(function (eCoin) {
    eCoin["btc"] = "btc";
    eCoin["eth"] = "eth";
})(eCoin = exports.eCoin || (exports.eCoin = {}));
var eConfig;
(function (eConfig) {
    eConfig["db"] = "db";
    eConfig["server"] = "server";
    eConfig["web3"] = "web3";
})(eConfig = exports.eConfig || (exports.eConfig = {}));
var eEnv;
(function (eEnv) {
    eEnv["local"] = "local";
    eEnv["dev"] = "dev";
    eEnv["prod"] = "prod";
})(eEnv = exports.eEnv || (exports.eEnv = {}));
var eRole;
(function (eRole) {
    eRole["enterprise"] = "enterprise";
    eRole["member"] = "member";
})(eRole = exports.eRole || (exports.eRole = {}));
var eHistory;
(function (eHistory) {
    eHistory["deposit"] = "deposit";
    eHistory["withraw"] = "withraw";
})(eHistory = exports.eHistory || (exports.eHistory = {}));
var eState;
(function (eState) {
    eState["request"] = "request";
    eState["confirm"] = "confirm";
    eState["fail"] = "fail";
})(eState = exports.eState || (exports.eState = {}));
var eWithdraw;
(function (eWithdraw) {
    eWithdraw["request"] = "request";
    eWithdraw["prepared"] = "prepared";
    eWithdraw["failed"] = "failed";
    eWithdraw["completed"] = "completed";
})(eWithdraw = exports.eWithdraw || (exports.eWithdraw = {}));
exports.EtherDefaultUnit = 'wei';
// noether: '0',
// wei:        '1',
// kwei:       '1000',
// Kwei:       '1000',
// babbage:    '1000',
// femtoether: '1000',
// mwei:       '1000000',
// Mwei:       '1000000',
// lovelace:   '1000000',
// picoether:  '1000000',
// gwei:       '1000000000',
// Gwei:       '1000000000',
// shannon:    '1000000000',
// nanoether:  '1000000000',
// nano:       '1000000000',
// szabo:      '1000000000000',
// microether: '1000000000000',
// micro:      '1000000000000',
// finney:     '1000000000000000',
// milliether: '1000000000000000',
// milli:      '1000000000000000',
// ether:      '1000000000000000000',
// kether:     '1000000000000000000000',
// grand:      '1000000000000000000000',
// mether:     '1000000000000000000000000',
// gether:     '1000000000000000000000000000',
// tether:     '1000000000000000000000000000000'
//# sourceMappingURL=enums.js.map