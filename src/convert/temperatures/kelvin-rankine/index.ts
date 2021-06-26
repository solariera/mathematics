/**
 * 係数
 */
const coefficient: number = 9 / 5;

/**
 * kelvinToRankine
 * ケルビンをランキン度に変換する。
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算されたランキン度
 */
const kelvinToRankine = (kelvin: number): number => {
  return kelvin * coefficient;
};

export { kelvinToRankine };
