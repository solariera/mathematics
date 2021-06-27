import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToNewton as fn } from '.';

const data: TestData<typeof fn>[] = [
  { id: '0K -> ニュートン度', params: [0], ret: -90.1395 },
  { id: '1K -> ニュートン度', params: [1], ret: -89.8095 },
  { id: '10K -> ニュートン度', params: [10], ret: -86.8395 },
  { id: '100K -> ニュートン度', params: [100], ret: -57.1395 },
];

tests(fn, data);
