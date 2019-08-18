import {
  Action,
  START_TIMER,
  RESUME_TIMER,
  PAUSE_TIMER,
  RESET_TIMER,
  INCREMENT_TIMER,
} from './action';

export interface ReducerState {
  total: number;
  isPlay: boolean;
  sec: number;
}

export const initialState: ReducerState = {
  total: 1500,
  isPlay: false,
  sec: 0,
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
