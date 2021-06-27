"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kelvinToDelisle = void 0;
const unit_1 = require("../types/unit");
/**
 * 係数
 */
const coefficient = 3 / 2;
/**
 * オフセット
 */
const offset = 100;
/**
 * kelvinToDelisle
 * ケルビンをドリール度に変換する。
 * (373.15 - [K]) * 3⁄2
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算されたドリール度
 */
const kelvinToDelisle = (kelvin) => {
    return (unit_1.absoluteTemperature + offset - kelvin) * coefficient;
};
exports.kelvinToDelisle = kelvinToDelisle;
