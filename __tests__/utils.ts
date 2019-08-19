import { getActivityLevel, getLevel, LevelArr } from '../src/app/utils';
import { Log } from '../src/app/reducer';

test('getActivityLevel should provide correct array', () => {
  const log01: Log[] = [
    {
      key: '2019-08-18',
      count: 10,
    },
    {
      key: '2019-08-17',
      count: 6,
    },
  ];

  const log02: Log[] = [
    {
      key: '2019-08-18',
      count: 5,
    },
    {
      key: '2019-08-17',
      count: 2,
    },
  ];

  const log03: Log[] = [
    {
      key: '2019-08-18',
      count: 3,
    },
    {
      key: '2019-08-17',
      count: 2,
    },
  ];

  const log04: Log[] = [
    {
      key: '2019-08-18',
      count: 2,
    },
    {
      key: '2019-08-17',
      count: 2,
    },
  ];

  const log05: Log[] = [
    {
      key: '2019-08-18',
      count: 1,
    },
  ];

  const log06: Log[] = [];

  expect(getActivityLevel(log01)).toEqual([0, 2.5, 5, 7.5, 10]);
  expect(getActivityLevel(log02)).toEqual([0, 1.25, 2.5, 3.75, 5]);
  expect(getActivityLevel(log03)).toEqual([0, 0.75, 1.5, 2.25, 3]);
  expect(getActivityLevel(log04)).toEqual([0, 0.5, 1, 1.5, 2]);
  expect(getActivityLevel(log05)).toEqual([0, 0.25, 0.5, 0.75, 1]);
  expect(getActivityLevel(log06)).toEqual([0, 0.25, 0.5, 0.75, 1]);
});

test('getLevel should provide correct level', () => {
  const levelArr01 = [0, 2.5, 5, 7.5, 10];
  expect(getLevel(4, levelArr01)).toEqual(2);
});
