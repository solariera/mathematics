import { tests, TestData } from '@solariera/easy-jest/lib';
import { degreeToRadian as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0°', params: [0], ret: 0 },
  { id: '1°', params: [1], ret: 0.017453292519943295 },
  { id: '30°', params: [30], ret: 0.5235987755982988 },
  { id: '60°', params: [60], ret: 1.0471975511965976 },
  { id: '90°', params: [90], ret: 1.5707963267948966 },
  { id: '180°', params: [180], ret: 3.141592653589793 },
  { id: '360°', params: [360], ret: 6.283185307179586 },
];

tests(fn, data);
