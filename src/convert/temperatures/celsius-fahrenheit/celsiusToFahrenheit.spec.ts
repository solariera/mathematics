import { tests, TestData } from '@solariera/easy-jest/lib';
import { celsiusToFahrenheit as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0℃ → 華氏', params: [0], ret: 32 },
  { id: '1℃ → 華氏', params: [1], ret: 33.8 },
  { id: '10℃ → 華氏', params: [10], ret: 50 },
  { id: '100℃ → 華氏', params: [100], ret: 212 },
];

tests(fn, data);
