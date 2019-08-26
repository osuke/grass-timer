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
  // interval time for 1 session. It's 1500sec.
  intervalTime: number;
  // Time when the timer is started or resumed.
  startTime: moment.Moment;
  // left time
  leftTime: number;
  // time from START_TIMER or RESUME_TIMER to the end.
  totalTime: number;
  // Timer is working or not
  isPlay: boolean;
  // log for activity calendar
  log: Log[];
}

const intervalTime = 1500;
const storageKey = 'log';
// fetch activity log from localStorage
const logStr = window.localStorage.getItem(storageKey);
const log = logStr ? JSON.parse(logStr) : [];

export const initialState: ReducerState = {
  intervalTime,
  startTime: moment(),
  leftTime: intervalTime,
  totalTime: intervalTime,
  isPlay: false,
  log,
};

export const reducer = (state: ReducerState, action: Action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        startTime: moment(),
        isPlay: true,
      };

    case RESUME_TIMER:
      return {
        ...state,
        startTime: moment(),
        isPlay: true,
      };

    case PAUSE_TIMER:
      return {
        ...state,
        totalTime: state.totalTime - moment().diff(state.startTime, 'second'),
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
        totalTime: state.intervalTime,
        leftTime: state.intervalTime,
        isPlay: false,
      };

    case INCREMENT_TIMER:
      const diff = state.totalTime - moment().diff(state.startTime, 'second');

      return {
        ...state,
        leftTime: diff <= 0 ? 0 : diff,
      };

    default:
      return state;
  }
};
