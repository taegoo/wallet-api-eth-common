export enum eCoin {
    btc = 'btc',
    eth = 'eth',
}

export enum eConfig {
    db = 'db',
    server = 'server',
    web3 = 'web3'
}

export enum eEnv {
    dev = 'dev',
    prod = 'prod'
}

export enum eRole {
    enterprise = 'enterprise',
    member = 'member'
}

export enum eHistory {
    deposit = 'deposit',
    withraw = 'withraw',
    transferTo = 'transferTo',
    transferFrom = 'tranferFrom'
}

export enum eState {
    request = 'request',
    pending = 'pending',
    confirm= 'confirm',
    cancel = 'cancel'
}

export const EtherDefaultUnit = 'wei';

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