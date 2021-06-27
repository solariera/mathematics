"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.temperatureUnits = exports.kelvinUnitKey = exports.fahrenheitUnitKey = exports.celsiusUnitKey = exports.absoluteTemperature = void 0;
/**
 * 絶対温度
 */
exports.absoluteTemperature = 273.15;
/**
 * セルシウス度（摂氏）の温度単位キー
 */
exports.celsiusUnitKey = 'c';
/**
 * ファーレンハイト度（華氏）の温度単位キー
 */
exports.fahrenheitUnitKey = 'f';
/**
 * ケルビンの温度単位キー
 */
exports.kelvinUnitKey = 'k';
/**
 * 温度単位キーと単位記号の対応オブジェクト
 */
exports.temperatureUnits = {
    [exports.celsiusUnitKey]: '°C',
    [exports.fahrenheitUnitKey]: '°F',
    [exports.kelvinUnitKey]: 'K',
};
