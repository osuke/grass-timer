import { h } from 'preact';
import style from './style.css';

interface Props {
  date: number;
  month: number;
}

const Cell = ({ date, month }: Props): h.JSX.Element => {
  return (
    <div
      className={style.cell}
      data-date={date}
      data-month={month}
    />
  );
};

export { Cell };
