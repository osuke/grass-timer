import { h } from 'preact';
import style from './style.css';

interface Props {
  date: number;
  month: number;
  level: number;
}

const Cell = ({ date, month, level }: Props): h.JSX.Element => {
  let levelClassName = style.cell0;

  switch (level) {
    case 1:
      levelClassName = style.cell1;
      break;

    case 2:
      levelClassName = style.cell2;
      break;

    case 3:
      levelClassName = style.cell3;
      break;

    case 4:
      levelClassName = style.cell4;
      break;
  }

  return (
    <div
      className={`${style.cell} ${levelClassName}`}
      data-date={date}
      data-month={month}
    />
  );
};

export { Cell };
