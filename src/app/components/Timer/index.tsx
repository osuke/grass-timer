import { h } from 'preact';
import { useReducer, useEffect } from 'preact/hooks';
import { Button } from '../Button';
import { PieTimer } from '../PieTimer';
import style from './style.css';

interface ReducerState {
  total: number;
  isPlay: boolean;
  sec: number;
}

const initialState: ReducerState = {
  total: 1500,
  isPlay: false,
  sec: 0,
};

interface Action {
  type: 'START' | 'PAUSE' | 'RESET' | 'INCREMENT';
}

const reducer = (state: ReducerState, action: Action) => {
  switch (action.type) {
    case 'START':
      // tslint:disable-next-line
      console.log(action.type);
      return {
        ...state,
        isPlay: true,
      };

    case 'PAUSE':
      // tslint:disable-next-line
      console.log(action.type);
      return {
        ...state,
        isPlay: false,
      };

    case 'RESET':
      // tslint:disable-next-line
      console.log(action.type);
      return {
        ...state,
        isPlay: false,
        sec: 0,
      };

    case 'INCREMENT':
      // tslint:disable-next-line
      console.log(action.type);
      return {
        ...state,
        sec: state.sec + 1,
      };

    default:
      return state;
  }
};

let timerID: NodeJS.Timeout;

export const Timer = ({}: {}) => {
  const [state, dispatch] = useReducer<ReducerState, Action>(reducer, initialState);
  const { sec, isPlay, total} = state;

  useEffect(() => {
    if (sec === total && isPlay) {
      dispatch({ type: 'PAUSE' });
      clearInterval(timerID);
      // tslint:disable-next-line
      console.log(state);
    }
  });

  const increment = () => {
    timerID = setInterval(() => {
      dispatch({ type: 'INCREMENT' });
    }, 1000);
  };

  const start = () => {
    if (isPlay) {
      return;
    }

    dispatch({ type: 'START' });
    increment();
  };

  const stop = () => {
    // tslint:disable-next-line
    console.log(timerID);
    dispatch({ type: 'PAUSE' });
    clearInterval(timerID);
  };

  const reset = () => {
    dispatch({ type: 'RESET' });

    if (timerID) {
      clearInterval(timerID);
    }
  };

  return (
    <div className={style.container}>
      <PieTimer
        radius={130}
        width={16}
        total={total}
        elapsed={sec}
      />
      <div className={style.buttons}>
        <div>
          <Button callback={reset}>RESET</Button>
        </div>
        <div>
          {isPlay ? (
            <Button callback={stop}>STOP</Button>
          ) : (
            <Button callback={start}>START</Button>
          )}
        </div>
      </div>
    </div>
  );
};
