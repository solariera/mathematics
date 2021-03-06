"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distanceOnSphere = void 0;
const degreeToRadian_1 = require("../convert/angle/degreeToRadian");
/**
 * distanceOnSphere
 * 球面上の2点間の距離を求める
 * @param p 1点目の経度,緯度
 * @param q 2点目の経度,緯度
 * @param r 球体の半径
 */
const distanceOnSphere = (p, q, r) => {
    const { acos, cos, sin } = Math;
    const { x: x1 = 0, y: y1 = 0 } = p;
    const { x: x2 = 0, y: y2 = 0 } = q;
    const radian = acos(cos(degreeToRadian_1.degreeToRadian(y1)) * cos(degreeToRadian_1.degreeToRadian(y2)) * cos(degreeToRadian_1.degreeToRadian(x2 - x1)) +
        sin(degreeToRadian_1.degreeToRadian(y1)) * sin(degreeToRadian_1.degreeToRadian(y2)));
    return r * radian;
};
exports.distanceOnSphere = distanceOnSphere;
