import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToRoemer as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0K -> レーマー度', params: [0], ret: -135.90375 },
  { id: '1K -> レーマー度', params: [1], ret: -135.37875 },
  { id: '10K -> レーマー度', params: [10], ret: -130.65375 },
  { id: '100K -> レーマー度', params: [100], ret: -83.40374999999999 },
];

tests(fn, data);
