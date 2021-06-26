import { AxisType } from './types/2d';
import { distanceLineToPoint } from './distanceLineToPoint';

/**
 * inCircle
 * 直線が円周内か判定する
 * @param {AxisType} p 直線1点目の座標
 * @param {AxisType} q 直線2点目の座標
 * @param {AxisType} circle 円の中心の座標
 * @param {number} r 円の半径
 */
const inCircle = (p: AxisType, q: AxisType, circle: AxisType, r: number): boolean => {
  // 半径の方が同じか大きければtrue（触れている）
  return r >= distanceLineToPoint(p, q, circle);
};

export { inCircle };
