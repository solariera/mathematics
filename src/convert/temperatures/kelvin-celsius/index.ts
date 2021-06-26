import { absoluteTemperature } from '../types/unit';

/**
 * kelvinToCelsius
 * ケルビンを摂氏に変換する。
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算された摂氏
 */
const kelvinToCelsius = (kelvin: number): number => {
  return kelvin - absoluteTemperature;
};

export { kelvinToCelsius };
