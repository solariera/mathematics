import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToRankine as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0K -> ランキン度', params: [0], ret: 0 },
  { id: '1K -> ランキン度', params: [1], ret: 1.8 },
  { id: '10K -> ランキン度', params: [10], ret: 18 },
  { id: '100K -> ランキン度', params: [100], ret: 180 },
];

tests(fn, data);
