import { AxisType } from './types/2d';

/**
 * constants
 * 直線の方程式の定数を求める
 * @param {AxisType} p 1点目の座標
 * @param {AxisType} q 2点目の座標
 * @returns 直線方程式(ax + by + c = 0)の定数{a,b,c}
 */
export const constant = (p: AxisType, q: AxisType): { a: number; b: number; c: number } => {
  const { x: x1 = 0, y: y1 = 0 } = p;
  const { x: x2 = 0, y: y2 = 0 } = q;

  const a = y2 - y1;
  const b = x1 - x2;
  const c = -a * x1 - b * y1;
  return { a, b, c };
};
