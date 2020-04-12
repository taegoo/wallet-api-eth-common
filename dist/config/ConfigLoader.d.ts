import { IConfig } from './IConfig';
import { eConfig } from '../enums/enums';
export declare class ConfigLoader {
    protected env: string;
    protected dic: {
        [key: string]: {
            [key: string]: IConfig;
        };
    };
    constructor(path: string, folder: string);
    getEnv(): string;
    get<T extends IConfig>(config: eConfig): T;
    protected toJson(path: string): IConfig;
}
