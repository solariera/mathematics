import { tests, TestData } from '@solariera/easy-jest/lib';
import { celsiusToKelvin as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0℃ → ケルビン', params: [0], ret: 273.15 },
  { id: '1℃ → ケルビン', params: [1], ret: 274.15 },
  { id: '10℃ → ケルビン', params: [10], ret: 283.15 },
  { id: '100℃ → ケルビン', params: [100], ret: 373.15 },
];

tests(fn, data);
