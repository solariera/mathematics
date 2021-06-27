import { degreeToRadian } from '../convert/angle/degree-radian';
import { AxisType } from './types/2d';

/**
 * distanceOnSphere
 * 球面上の2点間の距離を求める
 * @param p 1点目の経度,緯度
 * @param q 2点目の経度,緯度
 * @param r 球体の半径
 */
const distanceOnSphere = (p: AxisType, q: AxisType, r: number): number => {
  const { acos, cos, sin } = Math;
  const { x: x1 = 0, y: y1 = 0 } = p;
  const { x: x2 = 0, y: y2 = 0 } = q;

  const radian = acos(
    cos(degreeToRadian(y1)) * cos(degreeToRadian(y2)) * cos(degreeToRadian(x2 - x1)) +
      sin(degreeToRadian(y1)) * sin(degreeToRadian(y2)),
  );

  return r * radian;
};

export { distanceOnSphere };
