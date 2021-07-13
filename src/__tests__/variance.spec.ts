import { tests, TestData } from '@solariera/easy-jest';
import { variance as fn } from '../variance';

const data: TestData<typeof fn>[] = [
  { id: 'only zero', params: [[0]], ret: 0 },
  { id: 'all zero', params: [[0, 0, 0, 0, 0, 0, 0, 0, 0]], ret: 0 },
  { id: 'regular', params: [[6, 4, 6, 6, 6, 3, 7, 2, 2, 8]], ret: 4.444444444444445 },
  {
    id: 'long',
    params: [
      [
        4, 1, 2, 10, 3, 1, 5, 1, 9, 5, 1, 0, 3, 7, 4, 9, 0, 0, 5, 1, 3, 4, 1, 20, 0, 0, 4, 12, 3, 0, 0, 10, 2, 3, 1, 1,
        4, 3, 1, 2, 13, 6, 14, 20, 5, 2, 2, 0, 2, 4, 5, 0, 0, 9, 6, 2, 4, 1, 0, 9, 2, 9, 3, 0, 5, 20, 10, 3, 1, 6, 9, 0,
        2, 2, 10, 3, 11, 0, 2, 1,
      ],
    ],
    ret: 22.25569620253163,
  },
];

tests(fn, data);
