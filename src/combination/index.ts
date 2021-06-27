/**
 * JavaScript: 順列 / 組み合わせ / 重複順列 / 重複組み合わせ をまとめて関数にしてみた。
 * @see https://qiita.com/ttatsf/items/a98719ad9e1f72ddecca
 */

/**
 * 入力タイプ
 */
type Value = number | string;

// 共通の内部再帰関数
const innerPC =
  (filterFunc: Function) =>
  (selecteds: Value[]) =>
  (k: number) =>
  (options: Value[]): Value[][] =>
    k === 0
      ? [selecteds]
      : options.flatMap((e: Value, i: Value) => [
          ...innerPC(filterFunc)([...selecteds, e])(k - 1)(filterFunc(i)(options)),
        ]);

/**
 * perm
 * 順列
 * @example perm(2)([0, 1, 2]);
 * [ [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 1, 2 ], [ 2, 0 ], [ 2, 1 ] ]
 */
const permFilter = (i: Value) => (options: Value[]) => options.filter((_, j) => j !== i);
export const perm = (values: number[]) => innerPC(permFilter)(values);

/**
 * combine
 * 組み合わせ
 * @example combine(2)([0, 1, 2]);
 * [ [ 0, 1 ], [ 0, 2 ], [ 1, 2 ] ]
 */
const combiFilter = (i: Value) => (options: Value[]) => options.filter((_, j) => j > i);
export const combine = (values: number[]) => innerPC(combiFilter)(values);

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
const repPermFilter = () => (options: Value[]) => options;
export const repeatedPerm = (values: number[]) => innerPC(repPermFilter)(values);

/**
 * repeatedCombine
 * 重複組み合わせ
 * @exapmle repeatedCombine(3)([0, 1]);
 * [ [ 0, 0, 0 ], [ 0, 0, 1 ], [ 0, 1, 1 ], [ 1, 1, 1 ] ]
 */
const repCombiFilter = (i: Value) => (options: Value[]) => options.filter((_, j) => j >= i);
export const repeatedCombine = (values: number[]) => innerPC(repCombiFilter)(values);
