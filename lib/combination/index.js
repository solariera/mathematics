"use strict";
/**
 * JavaScript: 順列 / 組み合わせ / 重複順列 / 重複組み合わせ をまとめて関数にしてみた。
 * @see https://qiita.com/ttatsf/items/a98719ad9e1f72ddecca
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatedCombine = exports.repeatedPerm = exports.combine = exports.perm = void 0;
// 共通の内部再帰関数
const innerPC = (filterFunc) => (selecteds) => (k) => (options) => k === 0
    ? [selecteds]
    : options.flatMap((e, i) => [
        ...innerPC(filterFunc)([...selecteds, e])(k - 1)(filterFunc(i)(options)),
    ]);
/**
 * perm
 * 順列
 * @example perm(2)([0, 1, 2]);
 * [ [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 1, 2 ], [ 2, 0 ], [ 2, 1 ] ]
 */
const permFilter = (i) => (options) => options.filter((_, j) => j !== i);
const perm = (values) => innerPC(permFilter)(values);
exports.perm = perm;
/**
 * combine
 * 組み合わせ
 * @example combine(2)([0, 1, 2]);
 * [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ] ]
 */
const combiFilter = (i) => (options) => options.filter((_, j) => j > i);
const combine = (values) => innerPC(combiFilter)(values);
exports.combine = combine;
/**
 * repeatedPerm
 * 重複順列
 * @example repeatedPerm(3)([0, 1]);
 * [ [ 0, 0, 0 ],
 *   [ 0, 0, 1 ],
 *   [ 0, 1, 0 ],
 *   [ 0, 1, 1 ],
 *   [ 1, 0, 0 ],
 *   [ 1, 0, 1 ],
 *   [ 1, 1, 0 ],
 *   [ 1, 1, 1 ] ]
 */
const repPermFilter = () => (options) => options;
const repeatedPerm = (values) => innerPC(repPermFilter)(values);
exports.repeatedPerm = repeatedPerm;
/**
 * repeatedCombine
 * 重複組み合わせ
 * @exapmle repeatedCombine(3)([0, 1]);
 * [ [ 0, 0, 0 ], [ 0, 0, 1 ], [ 0, 1, 1 ], [ 1, 1, 1 ] ]
 */
const repCombiFilter = (i) => (options) => options.filter((_, j) => j >= i);
const repeatedCombine = (values) => innerPC(repCombiFilter)(values);
exports.repeatedCombine = repeatedCombine;
