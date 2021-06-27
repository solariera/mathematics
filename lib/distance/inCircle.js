"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inCircle = void 0;
const distanceLineToPoint_1 = require("./distanceLineToPoint");
/**
 * inCircle
 * 直線が円周内か判定する
 * @param {AxisType} p 直線1点目の座標
 * @param {AxisType} q 直線2点目の座標
 * @param {AxisType} circle 円の中心の座標
 * @param {number} r 円の半径
 */
const inCircle = (p, q, circle, r) => {
    // 半径の方が同じか大きければtrue（触れている）
    return r >= distanceLineToPoint_1.distanceLineToPoint(p, q, circle);
};
exports.inCircle = inCircle;
