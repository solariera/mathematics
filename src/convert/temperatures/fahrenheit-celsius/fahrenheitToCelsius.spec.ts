import { tests, TestData } from '@solariera/easy-jest/lib';
import { fahrenheitToCelsius as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0℉ -> 摂氏', params: [0], ret: -17.77777777777777 },
  { id: '1℉ -> 摂氏', params: [1], ret: -17.22222222222223 },
  { id: '10℉ -> 摂氏', params: [10], ret: -12.222222222222229 },
  { id: '100℉ -> 摂氏', params: [100], ret: 37.77777777777777 },
];

tests(fn, data);
