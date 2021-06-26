/**
 * calcSurfaceAreaOfSphere
 * 球の表面積を求める
 * @param r 球の半径
 */
const surfaceAreaOfSphere = (r: number): number => {
  return 4 * Math.PI * r * r;
};

export { surfaceAreaOfSphere };
