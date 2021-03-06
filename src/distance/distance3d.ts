import { PositionType } from './types/3d';

/**
 * distance
 * 空間上の2点間の距離を求める
 * @param p 1点目の座標
 * @param q 2点目の座標
 */
export const distance3d = (p: PositionType, q: PositionType): number => {
  const { x: x1 = 0, y: y1 = 0, z: z1 = 0 } = p;
  const { x: x2 = 0, y: y2 = 0, z: z2 = 0 } = q;
  const { sqrt, pow: power } = Math;
  return sqrt(power(x1 - x2, 2) + power(y1 - y2, 2) + power(z1 - z2, 2));
};
