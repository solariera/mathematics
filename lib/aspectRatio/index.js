"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aspectRatio = void 0;
const gcd_1 = require("../gcd");
/**
 * aspectRatio
 * 2値のアスペクト比を求める
 * @param {number} a 1値目
 * @param {number} b 2値目
 * @returns {[number, number]} アスペクト比
 */
const aspectRatio = (a, b) => {
    const value = gcd_1.gcd(a, b);
    return [a / value, b / value];
};
exports.aspectRatio = aspectRatio;
