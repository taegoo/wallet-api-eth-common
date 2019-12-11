"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_uuid_1 = require("node-uuid");
function makeAccessToken(accIdx) {
    function s4() {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    function s8() {
        return s4() + s4();
    }
    return Buffer.from(s8() + (1000000 + accIdx) + s4()).toString('base64');
}
exports.makeAccessToken = makeAccessToken;
function makeUUID() {
    return node_uuid_1.v4();
}
exports.makeUUID = makeUUID;
function makePassPhrase() {
    function guid8() {
        function s4() {
            return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
        }
        return s4() + s4();
    }
    return Buffer.from(guid8() + '@pp@' + guid8()).toString('base64');
}
exports.makePassPhrase = makePassPhrase;
//# sourceMappingURL=generator.js.map