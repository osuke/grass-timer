import { h } from 'preact';
import * as style from './style.css';
import { pad } from '../../utils';

interface Props {
  radius: number;
  width: number;
  total: number;
  elapsed: number;
}

export const PieTimer = ({ radius, width, total, elapsed }: Props) => {
  const gap = 2 * Math.PI * radius;
  const fillNum = gap * elapsed / total;
  const restTime = total - elapsed;
  const formattedTime = `${pad(Math.floor(restTime / 60))} : ${pad(restTime % 60)}`;
  // tslint:disable-next-line
  console.log(total, elapsed);

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
