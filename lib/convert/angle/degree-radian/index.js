"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.degreeToRadian = void 0;
/**
 * degreeToRadian
 * 角度をラジアンに変換する
 * @param degree 角度
 */
const degreeToRadian = (degree) => {
    return degree * (Math.PI / 180);
};
exports.degreeToRadian = degreeToRadian;
