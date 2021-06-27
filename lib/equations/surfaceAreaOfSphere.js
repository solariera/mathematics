"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.surfaceAreaOfSphere = void 0;
/**
 * calcSurfaceAreaOfSphere
 * 球の表面積を求める
 * @param r 球の半径
 */
const surfaceAreaOfSphere = (r) => {
    return 4 * Math.PI * r * r;
};
exports.surfaceAreaOfSphere = surfaceAreaOfSphere;
