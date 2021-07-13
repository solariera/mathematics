import { tests, TestData } from '@solariera/easy-jest';
import { average as fn } from '../average';

const data: TestData<typeof fn>[] = [
  { id: 'only zero', params: [0], ret: 0 },
  { id: 'all zero', params: [0, 0, 0, 0, 0], ret: 0 },
  { id: 'regular', params: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ret: 5.5 },
];

tests(fn, data);
