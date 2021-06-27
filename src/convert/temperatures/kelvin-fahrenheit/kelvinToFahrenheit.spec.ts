import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToFahrenheit as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0K -> 華氏', params: [0], ret: -459.66999999999996 },
  { id: '1K -> 華氏', params: [1], ret: -457.86999999999995 },
  { id: '10K -> 華氏', params: [10], ret: -441.66999999999996 },
  { id: '100K -> 華氏', params: [100], ret: -279.66999999999996 },
];

tests(fn, data);
