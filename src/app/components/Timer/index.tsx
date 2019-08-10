import { h, Fragment } from 'preact';
import { useReducer } from 'preact/hooks';
import { Button } from '../Button';
import { PieTimer } from '../PieTimer';

interface ReducerState {
  isPlay: boolean;
  sec: number;
}

const initialState: ReducerState = {
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

  const increment = () => {
    timerID = setInterval(() => {
      dispatch({ type: 'INCREMENT' });
    }, 1000);
  };

  const start = () => {
    if (state.isPlay) {
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
    <Fragment>
      <PieTimer
        radius={130}
        width={16}
        total={20}
        elapsed={state.sec}
      />
      <Button callback={reset}>RESET</Button>
      {state.isPlay ? (
        <Button callback={stop}>STOP</Button>
      ) : (
        <Button callback={start}>START</Button>
      )}
    </Fragment>
  );
};
