/**
 * 温度単位キーの型
 */
export declare type UnitType = 'k' | 'c' | 'f';
/**
 * 温度単位キー：データ対応の型
 */
export declare type TemperatureUnitsType = {
    [key in UnitType]: string;
};
/**
 * 絶対温度
 */
export declare const absoluteTemperature: number;
/**
 * セルシウス度（摂氏）の温度単位キー
 */
export declare const celsiusUnitKey: UnitType;
/**
 * ファーレンハイト度（華氏）の温度単位キー
 */
export declare const fahrenheitUnitKey: UnitType;
/**
 * ケルビンの温度単位キー
 */
export declare const kelvinUnitKey: UnitType;
/**
 * 温度単位キーと単位記号の対応オブジェクト
 */
export declare const temperatureUnits: TemperatureUnitsType;
