import { tests, TestData } from '@solariera/easy-jest';
import { factorial as fn } from '../factorial';

const data: TestData<typeof fn>[] = [
  { id: 'factorial 0', params: [0], ret: 1 },
  { id: 'factorial 1', params: [1], ret: 1 },
  { id: 'factorial 2', params: [2], ret: 2 },
  { id: 'factorial 3', params: [3], ret: 6 },
  { id: 'factorial 4', params: [4], ret: 24 },
  { id: 'factorial 5', params: [5], ret: 120 },
  { id: 'factorial 6', params: [6], ret: 720 },
  { id: 'factorial 7', params: [7], ret: 5040 },
  { id: 'factorial 8', params: [8], ret: 40320 },
  { id: 'factorial 9', params: [9], ret: 362880 },
  { id: 'factorial 10', params: [10], ret: 3628800 },
  { id: 'factorial 11', params: [11], ret: 39916800 },
  { id: 'factorial 12', params: [12], ret: 479001600 },
  { id: 'factorial 13', params: [13], ret: 6227020800 },
  { id: 'factorial 14', params: [14], ret: 87178291200 },
  { id: 'factorial 15', params: [15], ret: 1307674368000 },
  { id: 'factorial 16', params: [16], ret: 20922789888000 },
  { id: 'factorial 17', params: [17], ret: 355687428096000 },
  { id: 'factorial 18', params: [18], ret: 6402373705728000 },
  { id: 'factorial 19', params: [19], ret: 121645100408832000 },
  { id: 'factorial 20', params: [20], ret: 2432902008176640000 },
];

tests(fn, data);
