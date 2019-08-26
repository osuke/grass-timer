import { h } from 'preact';
import * as style from './style.css';
import { pad } from '../../utils';

interface Props {
  radius: number;
  width: number;
  leftTime: number;
  intervalTime: number;
}

export const PieTimer = ({ radius, width, leftTime, intervalTime }: Props): h.JSX.Element => {
  const elapsed = intervalTime - leftTime;
  const gap = 2 * Math.PI * radius;
  const fillNum = gap * elapsed / intervalTime;
  const formattedTime = `${pad(Math.floor(leftTime / 60))} : ${pad(leftTime % 60)}`;

  return (
    <div className={style.container}>
      <div className={style.time}>
        <span>{formattedTime}</span>
      </div>
      {elapsed !== 0 &&
        <svg width={(radius + width) * 2} height={(radius + width) * 2}>
          <circle
            r={radius}
            cx={radius + width}
            cy={radius + width}
            stroke-width={width}
            stroke-dasharray={`${fillNum} ${gap}`}
          />
        </svg>
      }
    </div>
  );
};
