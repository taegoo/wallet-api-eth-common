import * as fs from 'fs';
import { IConfig } from './IConfig';
import { ConfigLengthException, ConfigOutOfRangeException, EnvOutOfRangeException, NoneExistConfigFileException } from '../exception/ConfigLengthException';
import { eEnv, eConfig } from '../enums/enums';


export class ConfigLoader {
    protected env: string = eEnv.local;

    protected dic: { [key: string]: { [key: string]: IConfig } } = {};

    constructor(path: string, folder: string) {
        if (undefined !== process.env.NODE_ENV) {
            if ('' !== process.env.NODE_ENV) {
                this.env = process.env.NODE_ENV;
            }
        }

        const files = fs.readdirSync(`${path}/${folder}`);
        if (files.length <= 0)
            throw new ConfigLengthException();

        fs.readdirSync(`${path}/${folder}`).forEach(file => {
            const arrStr = file.split('.');
            if (undefined === this.dic[arrStr[0]]) {
                this.dic[arrStr[0]] = {};
            }
            this.dic[arrStr[0]][arrStr[1]] = this.toJson(`${path}/${folder}/${file}`);
            // console.log(this.dic[arrStr[0]][arrStr[1]]);
        });

    }

    getEnv(): string {
        return this.env;
    }

    get<T extends IConfig>(config: eConfig): T {
        if (undefined === this.dic[config])
            throw new ConfigOutOfRangeException();
        if (undefined === this.dic[config][this.env])
            throw new EnvOutOfRangeException();
        return this.dic[config][this.env] as T;
    }

    protected toJson(path: string): IConfig {
        const fs = require('fs');
        if (!fs.existsSync(path)) {
            throw new NoneExistConfigFileException(path);
        }
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    }
}