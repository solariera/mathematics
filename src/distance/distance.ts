import { AxisType } from './types/2d';

/**
 * distance
 * 平面の2点間の距離を求める
 * @param {AxisType} p 1点目の座標
 * @param {AxisType} q 2点目の座標
 */
const distance = (p: AxisType, q: AxisType): number => {
  const { x: x1 = 0, y: y1 = 0 } = p;
  const { x: x2 = 0, y: y2 = 0 } = q;
  const { sqrt, pow: power } = Math;
  return sqrt(power(x1 - x2, 2) + power(y1 - y2, 2));
};

export { distance };
