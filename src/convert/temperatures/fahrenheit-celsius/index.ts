import { fahrenheitToKelvin } from '../fahrenheit-kelvin';
import { kelvinToCelsius } from '../kelvin-celsius';

/**
 * fahrenheitToCelsius
 * 華氏を摂氏に変換する。
 * @param {number} fahrenheit 変換する華氏
 * @returns {number} 換算された摂氏
 */
const fahrenheitToCelsius = (fahrenheit: number): number => {
  return kelvinToCelsius(fahrenheitToKelvin(fahrenheit));
};

export { fahrenheitToCelsius };
