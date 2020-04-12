import { IConfig } from '..';
export declare class DbConfig implements IConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    logging: boolean;
}
