/**
 * JavaScript: 順列 / 組み合わせ / 重複順列 / 重複組み合わせ をまとめて関数にしてみた。
 * @see https://qiita.com/ttatsf/items/a98719ad9e1f72ddecca
 */
/**
 * 入力タイプ
 */
declare type Value = number | string;
export declare const perm: (values: number[]) => (k: number) => (options: Value[]) => Value[][];
export declare const combine: (values: number[]) => (k: number) => (options: Value[]) => Value[][];
export declare const repeatedPerm: (values: number[]) => (k: number) => (options: Value[]) => Value[][];
export declare const repeatedCombine: (values: number[]) => (k: number) => (options: Value[]) => Value[][];
export {};
