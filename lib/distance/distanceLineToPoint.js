"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distanceLineToPoint = void 0;
const distance_1 = require("./distance");
const constant_1 = require("./constant");
/**
 * distanceLineToPoint
 * 平面上の直線からある点までの距離を求める
 * @param p 直線1点目の座標
 * @param q 直線2点目の座標
 * @param point ある点の座標
 */
const distanceLineToPoint = (p, q, point) => {
    const { a, b, c } = constant_1.constant(p, q);
    const { x = 0, y = 0 } = point;
    return Math.abs((a * x + b * y + c) / distance_1.distance(p, q));
};
exports.distanceLineToPoint = distanceLineToPoint;
