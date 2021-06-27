import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToDelisle as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0K -> ドリール度', params: [0], ret: 559.7249999999999 },
  { id: '1K -> ドリール度', params: [1], ret: 558.2249999999999 },
  { id: '10K -> ドリール度', params: [10], ret: 544.7249999999999 },
  { id: '100K -> ドリール度', params: [100], ret: 409.72499999999997 },
];

tests(fn, data);
