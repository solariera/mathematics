"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kelvinToRankine = void 0;
/**
 * 係数
 */
const coefficient = 9 / 5;
/**
 * kelvinToRankine
 * ケルビンをランキン度に変換する。
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算されたランキン度
 */
const kelvinToRankine = (kelvin) => {
    return kelvin * coefficient;
};
exports.kelvinToRankine = kelvinToRankine;
