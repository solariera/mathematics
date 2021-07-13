import { tests, TestData } from '@solariera/easy-jest';
import { aspectRatio as fn } from '../aspectRatio';

const data: TestData<typeof fn>[] = [
  { id: '480p', params: [640, 480], ret: [4, 3], mode: 'toEqual' },
  { id: '720p', params: [1280, 720], ret: [16, 9], mode: 'toEqual' },
  { id: '1080p', params: [1920, 1080], ret: [16, 9], mode: 'toEqual' },
  { id: '1440p', params: [2560, 1440], ret: [16, 9], mode: 'toEqual' },
  { id: '4K', params: [3840, 2160], ret: [16, 9], mode: 'toEqual' },
];

tests(fn, data);
