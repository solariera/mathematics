import { AxisType } from './types/2d';
/**
 * inCircle
 * 直線が円周内か判定する
 * @param {AxisType} p 直線1点目の座標
 * @param {AxisType} q 直線2点目の座標
 * @param {AxisType} circle 円の中心の座標
 * @param {number} r 円の半径
 */
declare const inCircle: (p: AxisType, q: AxisType, circle: AxisType, r: number) => boolean;
export { inCircle };
