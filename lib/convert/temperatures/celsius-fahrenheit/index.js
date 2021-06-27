"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.celsiusToFahrenheit = void 0;
const celsius_kelvin_1 = require("../celsius-kelvin");
const kelvin_fahrenheit_1 = require("../kelvin-fahrenheit");
/**
 * celsiusToFahrenheit
 * 摂氏を華氏に変換する。
 * @param {number} celsius 変換する摂氏
 * @returns {number} 換算された華氏
 */
const celsiusToFahrenheit = (celsius) => {
    return kelvin_fahrenheit_1.kelvinToFahrenheit(celsius_kelvin_1.celsiusToKelvin(celsius));
};
exports.celsiusToFahrenheit = celsiusToFahrenheit;
