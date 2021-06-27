import { tests, TestData } from '@solariera/easy-jest/lib';
import { weightedAverage as fn, WeightData } from '.';

const data: TestData<typeof fn>[] = [
  { id: 'only zero', params: [{ value: 0, weight: 1 }], ret: 0 },
  {
    id: 'all zero',
    params: [
      { value: 0, weight: 1 },
      { value: 0, weight: 1 },
      { value: 0, weight: 1 },
    ],
    ret: 0,
  },
  {
    id: 'regular',
    params: [
      { value: 4, weight: 1 },
      { value: 3, weight: 2 },
      { value: 2, weight: 3 },
      { value: 1, weight: 4 },
    ],
    ret: 2,
  },
];

tests(fn, data);
