import { celsiusToKelvin } from '../celsius-kelvin';
import { kelvinToFahrenheit } from '../kelvin-fahrenheit';

/**
 * celsiusToFahrenheit
 * 摂氏を華氏に変換する。
 * @param {number} celsius 変換する摂氏
 * @returns {number} 換算された華氏
 */
const celsiusToFahrenheit = (celsius: number): number => {
  return kelvinToFahrenheit(celsiusToKelvin(celsius));
};

export { celsiusToFahrenheit };
