import { absoluteTemperature } from '../types/unit';

/**
 * 係数
 */
const coefficient: number = 3 / 2;

/**
 * オフセット
 */
const offset: number = 100;

/**
 * kelvinToDelisle
 * ケルビンをドリール度に変換する。
 * (373.15 - [K]) * 3⁄2
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算されたドリール度
 */
const kelvinToDelisle = (kelvin: number): number => {
  return (absoluteTemperature + offset - kelvin) * coefficient;
};

export { kelvinToDelisle };
