"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fahrenheitToCelsius = void 0;
const fahrenheit_kelvin_1 = require("../fahrenheit-kelvin");
const kelvin_celsius_1 = require("../kelvin-celsius");
/**
 * fahrenheitToCelsius
 * 華氏を摂氏に変換する。
 * @param {number} fahrenheit 変換する華氏
 * @returns {number} 換算された摂氏
 */
const fahrenheitToCelsius = (fahrenheit) => {
    return kelvin_celsius_1.kelvinToCelsius(fahrenheit_kelvin_1.fahrenheitToKelvin(fahrenheit));
};
exports.fahrenheitToCelsius = fahrenheitToCelsius;
