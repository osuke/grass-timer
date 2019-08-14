import { h } from 'preact';
import { useEffect, useContext } from 'preact/hooks';
import {
  startTimer,
  resumeTimer,
  pauseTimer,
  resetTimer,
  incrementTimer,
} from '../../action';
import { GlobalStateContext } from '../Provider';
import { Button } from '../Button';
import { PieTimer } from '../PieTimer';
import style from './style.css';

let timerID: NodeJS.Timeout;

export const Timer = ({}: {}) => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const { sec, isPlay, total} = state;

  useEffect(() => {
    if (sec === total && isPlay) {
      dispatch(pauseTimer());
      clearInterval(timerID);
      // tslint:disable-next-line
      console.log(state);
    }
  });

  const increment = () => {
    timerID = setInterval(() => {
      dispatch(incrementTimer());
    }, 1000);
  };

  const start = () => {
    if (isPlay) {
      return;
    }

    dispatch(startTimer());
    increment();
  };

  const reStart = () => {
    dispatch(resumeTimer());
    increment();
  };

  const stop = () => {
    // tslint:disable-next-line
    console.log(timerID);
    dispatch(pauseTimer());
    clearInterval(timerID);
  };

  const reset = () => {
    dispatch(resetTimer());

    if (timerID) {
      clearInterval(timerID);
    }
  };

  const renderStartButton = () => {
    if (sec === total || sec === 0) {
      return <Button callback={start}>START</Button>;
    } else {
      return <Button callback={reStart}>RESUME</Button>;
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
            renderStartButton()
          )}
        </div>
      </div>
    </div>
  );
};
