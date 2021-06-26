/**
 * 温度単位キーの型
 */
export type UnitType = 'k' | 'c' | 'f';

/**
 * 温度単位キー：データ対応の型
 */
export type TemperatureUnitsType = { [key in UnitType]: string };

/**
 * 絶対温度
 */
export const absoluteTemperature: number = 273.15 as const;

/**
 * セルシウス度（摂氏）の温度単位キー
 */
export const celsiusUnitKey: UnitType = 'c' as const;

/**
 * ファーレンハイト度（華氏）の温度単位キー
 */
export const fahrenheitUnitKey: UnitType = 'f' as const;

/**
 * ケルビンの温度単位キー
 */
export const kelvinUnitKey: UnitType = 'k' as const;

/**
 * 温度単位キーと単位記号の対応オブジェクト
 */
export const temperatureUnits: TemperatureUnitsType = {
  [celsiusUnitKey]: '°C',
  [fahrenheitUnitKey]: '°F',
  [kelvinUnitKey]: 'K',
};
