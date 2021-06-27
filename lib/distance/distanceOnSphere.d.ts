import { AxisType } from './types/2d';
/**
 * distanceOnSphere
 * 球面上の2点間の距離を求める
 * @param p 1点目の経度,緯度
 * @param q 2点目の経度,緯度
 * @param r 球体の半径
 */
declare const distanceOnSphere: (p: AxisType, q: AxisType, r: number) => number;
export { distanceOnSphere };
