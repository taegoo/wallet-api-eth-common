export enum eLogLevel {
    debug = 'debug',
    info = 'info',
    warn = 'warn',
    error = 'error',
}

interface ILogMethod {
    (level: string, message?: string): void;
    (level: string, message?: string, meta?: any): void;
    (level: string, message?: string, ...meta: any[]): void;
}

interface ILeveledLogMethod {
    (message: string): void;
    (message: string, meta: any): void;
    (message: string, ...meta: any[]): void;
}

export interface ILogger {
    log: ILogMethod;
    error: ILeveledLogMethod;
    debug: ILeveledLogMethod;
    info: ILeveledLogMethod;
    warn: ILeveledLogMethod;
}