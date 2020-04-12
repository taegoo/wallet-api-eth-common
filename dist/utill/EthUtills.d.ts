import BN from 'bn.js';
declare class EthUtills {
    /**
     * Returns value of unit in Wei
     *
     * @method getValueOfUnit
     * @param {String} unit the unit to convert to, default ether
     * @returns {BigNumber} value of the unit (in Wei)
     * @throws error if the unit is not correct:w
     */
    getValueOfUnit(unitInput: string): BN;
    numberToString(arg: string | number): string;
    fromWei(weiInput: number | string, unit: string): string;
    toWei(etherInput: string | number, unit: string): BN;
    add(oriInput: string | number, oriUnit: string, addInput: string, addUnit: string): BN;
    sub(oriInput: string, oriUnit: string, subInput: string, subUnit: string): BN;
    /**
     * a가 b보다 작은 경우
     * @param aInput aInput
     * @param aUnit aUnit
     * @param bInput bInput
     * @param bUnit bUnit
     */
    isLessThan(aInput: string, aUnit: string, bInput: string, bUnit: string): boolean;
    /**
     * a가 b보다 작거나 같은 경우
     * @param aInput aInput
     * @param aUnit aUnit
     * @param bInput bInput
     * @param bUnit bUnit
     */
    isLessThanEqual(aInput: string, aUnit: string, bInput: string, bUnit: string): boolean;
    calc(type: string, oriInput: string, oriUnit: string, calcInput: string, calcUnit: string): BN;
}
export declare const EthUtill: EthUtills;
export {};
