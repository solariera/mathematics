import { absoluteTemperature } from '../types/unit';

/**
 * 係数
 */
const coefficient: number = 21 / 40;

/**
 * オフセット
 */
const offset: number = 7.5;

/**
 * kelvinToRoemer
 * ケルビンをレーマー度に変換する。
 * ([K] - 273.15) * 21⁄40 + 7.5
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算されたレーマー度
 */
const kelvinToRoemer = (kelvin: number): number => {
  return (kelvin - absoluteTemperature) * coefficient + offset;
};

export { kelvinToRoemer };
