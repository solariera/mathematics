import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToReaumur as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0K -> レミオミュール度', params: [0], ret: -218.51999999999998 },
  { id: '1K -> レミオミュール度', params: [1], ret: -217.72 },
  { id: '10K -> レミオミュール度', params: [10], ret: -210.51999999999998 },
  { id: '100K -> レミオミュール度', params: [100], ret: -138.51999999999998 },
];

tests(fn, data);
