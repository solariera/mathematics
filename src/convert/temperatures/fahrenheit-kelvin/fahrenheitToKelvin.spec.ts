import { tests, TestData } from '@solariera/easy-jest/lib';
import { fahrenheitToKelvin as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0℉ → ケルビン', params: [0], ret: 255.3722222222222 },
  { id: '1℉ → ケルビン', params: [1], ret: 255.92777777777775 },
  { id: '10℉ → ケルビン', params: [10], ret: 260.92777777777775 },
  { id: '100℉ → ケルビン', params: [100], ret: 310.92777777777775 },
];

tests(fn, data);
