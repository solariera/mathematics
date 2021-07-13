import { tests, TestData } from '@solariera/easy-jest';
import { stdev as fn } from '../stdev';

const data: TestData<typeof fn>[] = [
  { id: 'only zero', params: [0], ret: 0 },
  { id: 'all zero', params: [0, 0, 0, 0, 0, 0, 0, 0, 0], ret: 0 },
  { id: 'regular', params: [6, 4, 6, 6, 6, 3, 7, 2, 2, 8], ret: 2 },
];

tests(fn, data);
