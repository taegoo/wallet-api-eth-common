"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const ConfigLengthException_1 = require("../exception/ConfigLengthException");
const enums_1 = require("../enums/enums");
class ConfigLoader {
    constructor(path, folder) {
        this.env = enums_1.eEnv.dev;
        this.dic = {};
        if (undefined !== process.env.NODE_ENV) {
            if ('' !== process.env.NODE_ENV) {
                this.env = process.env.NODE_ENV;
            }
        }
        const files = fs.readdirSync(`${path}/${folder}`);
        if (files.length <= 0)
            throw new ConfigLengthException_1.ConfigLengthException();
        fs.readdirSync(`${path}/${folder}`).forEach(file => {
            const arrStr = file.split('.');
            if (undefined === this.dic[arrStr[0]]) {
                this.dic[arrStr[0]] = {};
            }
            this.dic[arrStr[0]][arrStr[1]] = this.toJson(`${path}/${folder}/${file}`);
            // console.log(this.dic[arrStr[0]][arrStr[1]]);
        });
    }
    getEnv() {
        return this.env;
    }
    get(config) {
        if (undefined === this.dic[config])
            throw new ConfigLengthException_1.ConfigOutOfRangeException();
        if (undefined === this.dic[config][this.env])
            throw new ConfigLengthException_1.EnvOutOfRangeException();
        return this.dic[config][this.env];
    }
    toJson(path) {
        const fs = require('fs');
        if (!fs.existsSync(path)) {
            throw new ConfigLengthException_1.NoneExistConfigFileException(path);
        }
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    }
}
exports.ConfigLoader = ConfigLoader;
//# sourceMappingURL=ConfigLoader.js.map