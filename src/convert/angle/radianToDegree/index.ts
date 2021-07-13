/**
 * radianToDegree
 * ラジアンを角度に変換する
 * @param radian 角度
 */
export const radianToDegree = (radian: number): number => {
  return (radian * 180) / Math.PI;
};
