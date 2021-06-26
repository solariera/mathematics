import { absoluteTemperature } from '../types/unit';

/**
 * 係数
 */
const coefficient: number = 1.8;

/**
 * オフセット
 */
const offset: number = 32;

/**
 * convertKelvinToFahrenheit
 * ケルビンを華氏に変換する。
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算された華氏
 */
const kelvinToFahrenheit = (kelvin: number): number => {
  return (kelvin - absoluteTemperature) * coefficient + offset;
};

export { kelvinToFahrenheit };
