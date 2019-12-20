import BN from 'bn.js';
import Strip from './Strip';
import { eHistory } from '..';

const zero = new BN(0);
const negative1 = new BN(-1);

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
    getValueOfUnit(unitInput: string): BN {
        const unit = unitInput ? unitInput.toLowerCase() : 'ether';
        const unitValue = unitMap[unit];

        if (typeof unitValue !== 'string') {
            throw new Error('[ethjs-unit] the unit provided ' + unitInput + ' doesn\'t exists, please use the one of the following units ' + JSON.stringify(unitMap, undefined, 2));
        }

        return new BN(unitValue, 10);
    }

    numberToString(arg: string | number) {
        if (typeof arg === 'string') {
            if (!arg.match(/^-?[0-9.]+$/)) {
                throw new Error('while converting number to string, invalid number value \'' + arg + '\', should be a number matching (^-?[0-9.]+).');
            }
            return arg;
        } else if (typeof arg === 'number') {
            return String(arg);
        }

        throw new Error('while converting number to string, invalid number value \'' + arg + '\' type ' + typeof arg + '.');
    }

    fromWei(weiInput: number | string, unit: string): string {
        let wei = Strip.numberToBN(weiInput);
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

    toWei(etherInput: string | number, unit: string) {
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

        let whole = comps[0],
            fraction = comps[1];

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

        const bnWhole = new BN(whole);
        const bnFraction = new BN(fraction);
        let wei: BN = bnWhole.mul(base).add(bnFraction);

        if (negative) {
            wei = wei.mul(negative1);
        }

        return new BN(wei.toString(10), 10);
    }

    add(oriInput: string | number, oriUnit: string, addInput: string, addUnit: string): BN {

        const oriValue = this.toWei(oriInput, oriUnit);
        console.log('!!! oriValue : ' + oriValue);

        const addValue = this.toWei(addInput, addUnit);
        console.log('!!! addValue : ' + addValue);

        return oriValue.add(addValue);
    }

    sub(oriInput: string, oriUnit: string, subInput: string, subUnit: string): BN {

        const oriValue = this.toWei(oriInput, oriUnit);

        const subtractValue = this.toWei(subInput, subUnit);

        return oriValue.sub(subtractValue);
    }


    isLessThan(aInput: string, aUnit: string, bInput: string, bUnit: string): boolean {
        const aValue = this.toWei(aInput, aUnit);
        console.log(aValue.toString());

        const bValue = this.toWei(bInput, bUnit);
        console.log(bValue.toString());
        console.log(aValue.lte(bValue));

        return bValue.lte(aValue);
    }

    calc(type: string, oriInput: string, oriUnit: string, calcInput: string, calcUnit: string): BN {
        // comment : 아 이런 코드.
        switch (type) {
            case eHistory.withraw: return this.sub(oriInput, oriUnit, calcInput, calcUnit); break;
            // case eHistory.transferFrom: return this.add(oriInput, oriUnit, calcInput, calcUnit); break;
            // case eHistory.transferTo: return this.sub(oriInput, oriUnit, calcInput, calcUnit); break;
            case eHistory.deposit: return this.add(oriInput, oriUnit, calcInput, calcUnit); break;
            default: throw new Error();
        }
    }

}

export const EthUtill = new EthUtills();