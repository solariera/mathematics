"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fahrenheitToKelvin = void 0;
const unit_1 = require("../types/unit");
/**
 * 係数
 */
const coefficient = 1.8;
/**
 * オフセット
 */
const offset = 32;
/**
 * convertFahrenheitToKelvin
 * 華氏をケルビンに変換する。
 * @param {number} fahrenheit 変換する華氏
 * @returns {number} 換算されたケルビン
 */
const fahrenheitToKelvin = (fahrenheit) => {
    return (fahrenheit - offset) / coefficient + unit_1.absoluteTemperature;
};
exports.fahrenheitToKelvin = fahrenheitToKelvin;
