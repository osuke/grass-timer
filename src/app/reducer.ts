import moment from 'moment';
import {
  Action,
  START_TIMER,
  RESUME_TIMER,
  PAUSE_TIMER,
  RESET_TIMER,
  END_TIMER,
  INCREMENT_TIMER,
} from './action';

export interface Log {
  key: string;
  count: number;
}

export interface ReducerState {
  total: number;
  isPlay: boolean;
  sec: number;
  log: Log[];
}

const storageKey = 'log';
// fetch activity log from localStorage
const logStr = window.localStorage.getItem(storageKey);
const log = logStr ? JSON.parse(logStr) : [];

export const initialState: ReducerState = {
  total: 1500,
  isPlay: false,
  sec: 0,
  log,
};

export const reducer = (state: ReducerState, action: Action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        isPlay: true,
        sec: 0,
      };

    case RESUME_TIMER:
      return {
        ...state,
        isPlay: true,
      };

    case PAUSE_TIMER:
      return {
        ...state,
        isPlay: false,
      };

    case END_TIMER:
      const newLog = state.log;
      const targetKey = moment().format('YYYY-MM-DD');
      const targetObj = newLog.filter((obj) => obj.key === targetKey);

      // check if the activity of today is exist
      if (targetObj.length) {
       newLog.forEach((val, index) => {
        if (val.key === targetKey) {
          newLog[index].count++;
        }
       });
      } else {
        newLog.push({
          key: targetKey,
          count: 1,
        });
      }

      // store new activity log in localStorage
      window.localStorage.setItem(storageKey, JSON.stringify(newLog));

      return {
        ...state,
        isPlay: false,
        log: newLog,
      };

    case RESET_TIMER:
      return {
        ...state,
        isPlay: false,
        sec: 0,
      };

    case INCREMENT_TIMER:
      return {
        ...state,
        sec: state.sec + 1,
      };

    default:
      return state;
  }
};
