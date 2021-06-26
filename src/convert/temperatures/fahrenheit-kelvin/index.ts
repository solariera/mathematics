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
 * convertFahrenheitToKelvin
 * 華氏をケルビンに変換する。
 * @param {number} fahrenheit 変換する華氏
 * @returns {number} 換算されたケルビン
 */
const fahrenheitToKelvin = (fahrenheit: number): number => {
  return (fahrenheit - offset) / coefficient + absoluteTemperature;
};

export { fahrenheitToKelvin };
