"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kelvinToCelsius = void 0;
const unit_1 = require("../types/unit");
/**
 * kelvinToCelsius
 * ケルビンを摂氏に変換する。
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算された摂氏
 */
const kelvinToCelsius = (kelvin) => {
    return kelvin - unit_1.absoluteTemperature;
};
exports.kelvinToCelsius = kelvinToCelsius;
