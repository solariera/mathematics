import { gcd } from '../gcd';

/**
 * aspectRatio
 * 2値のアスペクト比を求める
 * @param {number} a 1値目
 * @param {number} b 2値目
 * @returns {[number, number]} アスペクト比
 */
const aspectRatio = (a: number, b: number): [number, number] => {
  const value: number = gcd(a, b);
  return [a / value, b / value];
};

export { aspectRatio };
