import { absoluteTemperature } from '../types/unit';

/**
 * 係数
 */
const coefficient: number = 33 / 100;

/**
 * kelvinToNewton
 * ケルビンをニュートン度に変換する。
 * ([K] - 273.15) * 33⁄100
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算されたニュートン度
 */
const kelvinToNewton = (kelvin: number): number => {
  return (kelvin - absoluteTemperature) * coefficient;
};

export { kelvinToNewton };
