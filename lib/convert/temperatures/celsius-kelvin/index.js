"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.celsiusToKelvin = void 0;
const unit_1 = require("../types/unit");
/**
 * celsiusToKelvin
 * 摂氏をケルビンに変換する。
 * @param {number} celsius 変換する摂氏
 * @returns {number} 換算されたケルビン
 */
const celsiusToKelvin = (celsius) => {
    return celsius + unit_1.absoluteTemperature;
};
exports.celsiusToKelvin = celsiusToKelvin;
