export enum eErrorCode {
    Success = 0,
    Undefined = 1,



    API = 100,
    FailCreatedAddress = 101,
    AlreadyHasEthAddress = 102,
    NoneExistCoinAddress = 103,

    NotEnoughBalance = 104,
    NoneExistWithdrawToken = 105,
    InvalidWithdrawToken = 106,


    Internal = 500,
    Web3Error = 900,


    DbError = 1000,
}