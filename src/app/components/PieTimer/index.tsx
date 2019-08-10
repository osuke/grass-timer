import { h, render } from 'preact';
import * as style from './style.css';

interface Props {
  radius: number;
  width: number;
  total: number;
  elapsed: number;
}

export const PieTimer = ({ radius, width, total, elapsed }: Props) => {
  const gap = 2 * Math.PI * radius;
  const fillNum = gap * elapsed / total;

  return (
    <div className={style.container}>
      <div className={style.time}>
        <span>{elapsed}</span>
      </div>
      <svg width={(radius + width) * 2} height={(radius + width) * 2}>
        <circle
          r={radius}
          cx={radius + width}
          cy={radius + width}
          stroke-width={width}
          stroke-dasharray={`${fillNum} ${gap}`}
        />
      </svg>
    </div>
  );
};
