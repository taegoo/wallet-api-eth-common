import { v4 } from 'node-uuid';

export function makeAccessToken(accIdx: number): string {
    function s4(): string {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    function s8(): string {

        return s4() + s4();
    }
    return Buffer.from(s8() + (1000000 + accIdx) + s4()).toString('base64');
}

export function makeUUID(): string {
    return v4();
}

export function makePassPhrase(): string {
    function guid8(): string {
        function s4(): string {
            return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
        }
        return s4() + s4();
    }
    return Buffer.from(guid8() + '@pp@' + guid8()).toString('base64');
}
