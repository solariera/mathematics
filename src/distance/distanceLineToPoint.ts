import { distance } from './distance';
import { constant } from './constant';
import { AxisType } from './types/2d';

/**
 * distanceLineToPoint
 * 平面上の直線からある点までの距離を求める
 * @param p 直線1点目の座標
 * @param q 直線2点目の座標
 * @param point ある点の座標
 */
export const distanceLineToPoint = (p: AxisType, q: AxisType, point: AxisType): number => {
  const { a, b, c } = constant(p, q);
  const { x = 0, y = 0 } = point;
  return Math.abs((a * x + b * y + c) / distance(p, q));
};
