import { absoluteTemperature } from '../types/unit';

/**
 * celsiusToKelvin
 * 摂氏をケルビンに変換する。
 * @param {number} celsius 変換する摂氏
 * @returns {number} 換算されたケルビン
 */
const celsiusToKelvin = (celsius: number): number => {
  return celsius + absoluteTemperature;
};

export { celsiusToKelvin };
