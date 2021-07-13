/**
 * degreeToRadian
 * 角度をラジアンに変換する
 * @param degree 角度
 */
const degreeToRadian = (degree: number): number => {
  return degree * (Math.PI / 180);
};

export { degreeToRadian };
