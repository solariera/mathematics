"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radianToDegree = void 0;
/**
 * radianToDegree
 * ラジアンを角度に変換する
 * @param radian 角度
 */
const radianToDegree = (radian) => {
    return (radian * 180) / Math.PI;
};
exports.radianToDegree = radianToDegree;
