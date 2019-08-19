import { Log } from './reducer';

export const pad = (num: number): string => {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
};

export const getActivityLevel = (log: Log[]): number[] => {
  let max = 1;

  log.forEach((val) => {
    max = val.count > max ? val.count : max;
  });

  const min = max / 4;
  return  [0, min, min * 2, min * 3, max];
};

export type LevelArr = number[];

export const getLevel = (count: number, arr: LevelArr): number => {
  let level = 0;

  for (let i = 1; i < arr.length; i++) {
    if (count <= arr[i]) {
      level = i;
      break;
    }
  }

  return level;
};
