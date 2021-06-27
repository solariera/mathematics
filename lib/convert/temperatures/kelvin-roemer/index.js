"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kelvinToRoemer = void 0;
const unit_1 = require("../types/unit");
/**
 * 係数
 */
const coefficient = 21 / 40;
/**
 * オフセット
 */
const offset = 7.5;
/**
 * kelvinToRoemer
 * ケルビンをレーマー度に変換する。
 * ([K] - 273.15) * 21⁄40 + 7.5
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算されたレーマー度
 */
const kelvinToRoemer = (kelvin) => {
    return (kelvin - unit_1.absoluteTemperature) * coefficient + offset;
};
exports.kelvinToRoemer = kelvinToRoemer;
