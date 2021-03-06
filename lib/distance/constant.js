"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = void 0;
/**
 * constants
 * 直線の方程式の定数を求める
 * @param {AxisType} p 1点目の座標
 * @param {AxisType} q 2点目の座標
 * @returns 直線方程式(ax + by + c = 0)の定数{a,b,c}
 */
const constant = (p, q) => {
    const { x: x1 = 0, y: y1 = 0 } = p;
    const { x: x2 = 0, y: y2 = 0 } = q;
    const a = y2 - y1;
    const b = x1 - x2;
    const c = -a * x1 - b * y1;
    return { a, b, c };
};
exports.constant = constant;
