import { IConfig } from '..';

export class ServerConfig implements IConfig {
    name: string;
    port: number;
    logPath: string;
    logLevel: string = 'error';
}