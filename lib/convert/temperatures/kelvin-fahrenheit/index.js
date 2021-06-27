"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kelvinToFahrenheit = void 0;
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
 * convertKelvinToFahrenheit
 * ケルビンを華氏に変換する。
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算された華氏
 */
const kelvinToFahrenheit = (kelvin) => {
    return (kelvin - unit_1.absoluteTemperature) * coefficient + offset;
};
exports.kelvinToFahrenheit = kelvinToFahrenheit;
