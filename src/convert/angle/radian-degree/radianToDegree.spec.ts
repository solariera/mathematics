import { tests, TestData } from '@solariera/easy-jest/lib';
import { radianToDegree as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: 'radian = 0', params: [0], ret: 0 },
  { id: 'radian = 1', params: [1], ret: 57.29577951308232 },
  { id: 'radian = 2', params: [2], ret: 114.59155902616465 },
  { id: 'radian = 3', params: [3], ret: 171.88733853924697 },
  { id: 'radian = 5', params: [5], ret: 286.4788975654116 },
  { id: 'radian = 7', params: [7], ret: 401.07045659157626 },
  { id: 'radian = 10', params: [10], ret: 572.9577951308232 },
];

tests(fn, data);
