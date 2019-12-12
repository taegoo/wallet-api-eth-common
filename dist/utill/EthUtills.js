"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bn_js_1 = __importDefault(require("bn.js"));
const Strip_1 = __importDefault(require("./Strip"));
const __1 = require("..");
const zero = new bn_js_1.default(0);
const negative1 = new bn_js_1.default(-1);
// complete ethereum unit map
const unitMap = {
    'noether': '0',
    'wei': '1',
    'kwei': '1000',
    'Kwei': '1000',
    'babbage': '1000',
    'femtoether': '1000',
    'mwei': '1000000',
    'Mwei': '1000000',
    'lovelace': '1000000',
    'picoether': '1000000',
    'gwei': '1000000000',
    'Gwei': '1000000000',
    'shannon': '1000000000',
    'nanoether': '1000000000',
    'nano': '1000000000',
    'szabo': '1000000000000',
    'microether': '1000000000000',
    'micro': '1000000000000',
    'finney': '1000000000000000',
    'milliether': '1000000000000000',
    'milli': '1000000000000000',
    'ether': '1000000000000000000',
    'kether': '1000000000000000000000',
    'grand': '1000000000000000000000',
    'mether': '1000000000000000000000000',
    'gether': '1000000000000000000000000000',
    'tether': '1000000000000000000000000000000'
};
class EthUtills {
    /**
     * Returns value of unit in Wei
     *
     * @method getValueOfUnit
     * @param {String} unit the unit to convert to, default ether
     * @returns {BigNumber} value of the unit (in Wei)
     * @throws error if the unit is not correct:w
     */
    getValueOfUnit(unitInput) {
        const unit = unitInput ? unitInput.toLowerCase() : 'ether';
        const unitValue = unitMap[unit];
        if (typeof unitValue !== 'string') {
            throw new Error('[ethjs-unit] the unit provided ' + unitInput + ' doesn\'t exists, please use the one of the following units ' + JSON.stringify(unitMap, undefined, 2));
        }
        return new bn_js_1.default(unitValue, 10);
    }
    numberToString(arg) {
        if (typeof arg === 'string') {
            if (!arg.match(/^-?[0-9.]+$/)) {
                throw new Error('while converting number to string, invalid number value \'' + arg + '\', should be a number matching (^-?[0-9.]+).');
            }
            return arg;
        }
        else if (typeof arg === 'number') {
            return String(arg);
        }
        throw new Error('while converting number to string, invalid number value \'' + arg + '\' type ' + typeof arg + '.');
    }
    fromWei(weiInput, unit) {
        let wei = Strip_1.default.numberToBN(weiInput);
        const negative = wei.lt(zero);
        const base = this.getValueOfUnit(unit);
        const baseLength = unitMap[unit].length - 1 || 1;
        if (negative) {
            wei = wei.mul(negative1);
        }
        let fraction = wei.mod(base).toString(10);
        while (fraction.length < baseLength) {
            fraction = '0' + fraction;
        }
        const whole = wei.div(base).toString(10);
        let value = '' + whole + (fraction == '0' ? '' : '.' + fraction);
        if (negative) {
            value = '-' + value;
        }
        return value;
    }
    toWei(etherInput, unit) {
        let ether = this.numberToString(etherInput);
        const base = this.getValueOfUnit(unit);
        const baseLength = unitMap[unit].length - 1 || 1;
        // Is it negative?
        const negative = ether.substring(0, 1) === '-';
        if (negative) {
            ether = ether.substring(1);
        }
        if (ether === '.') {
            throw new Error('[ethjs-unit] while converting number ' + etherInput + ' to wei, invalid value');
        }
        // Split it into a whole and fractional part
        const comps = ether.split('.');
        if (comps.length > 2) {
            throw new Error('[ethjs-unit] while converting number ' + etherInput + ' to wei,  too many decimal points');
        }
        let whole = comps[0], fraction = comps[1];
        if (!whole) {
            whole = '0';
        }
        if (!fraction) {
            fraction = '0';
        }
        if (fraction.length > baseLength) {
            throw new Error('[ethjs-unit] while converting number ' + etherInput + ' to wei, too many decimal places');
        }
        while (fraction.length < baseLength) {
            fraction += '0';
        }
        const bnWhole = new bn_js_1.default(whole);
        const bnFraction = new bn_js_1.default(fraction);
        let wei = bnWhole.mul(base).add(bnFraction);
        if (negative) {
            wei = wei.mul(negative1);
        }
        return new bn_js_1.default(wei.toString(10), 10);
    }
    add(oriInput, oriUnit, addInput, addUnit) {
        const oriValue = this.toWei(oriInput, oriUnit);
        console.log('!!! oriValue : ' + oriValue);
        const addValue = this.toWei(addInput, addUnit);
        console.log('!!! addValue : ' + addValue);
        return oriValue.sub(addValue);
    }
    sub(oriInput, oriUnit, subInput, subUnit) {
        const oriValue = this.toWei(oriInput, oriUnit);
        const subtractValue = this.toWei(subInput, subUnit);
        return oriValue.sub(subtractValue);
    }
    isLessThan(aInput, aUnit, bInput, bUnit) {
        const aValue = this.toWei(aInput, aUnit);
        console.log(aValue.toString());
        const bValue = this.toWei(bInput, bUnit);
        console.log(bValue.toString());
        console.log(aValue.lt(bValue));
        return bValue.lt(aValue);
    }
    calc(type, oriInput, oriUnit, calcInput, calcUnit) {
        switch (type) {
            case __1.eHistory.withraw:
                return this.sub(oriInput, oriUnit, calcInput, calcUnit);
                break;
            case __1.eHistory.transferFrom:
                return this.sub(oriInput, oriUnit, calcInput, calcUnit);
                break;
            case __1.eHistory.transferTo:
                return this.add(oriInput, oriUnit, calcInput, calcUnit);
                break;
            case __1.eHistory.deposit:
                return this.add(oriInput, oriUnit, calcInput, calcUnit);
                break;
            default: throw new Error();
        }
    }
}
exports.EthUtill = new EthUtills();
//# sourceMappingURL=EthUtills.js.map