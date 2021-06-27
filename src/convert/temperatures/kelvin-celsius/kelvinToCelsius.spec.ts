import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToCelsius as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0K -> 摂氏', params: [0], ret: -273.15 },
  { id: '1K -> 摂氏', params: [1], ret: -272.15 },
  { id: '10K -> 摂氏', params: [10], ret: -263.15 },
  { id: '100K -> 摂氏', params: [100], ret: -173.14999999999998 },
];

tests(fn, data);
