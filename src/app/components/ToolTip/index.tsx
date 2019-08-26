import { h } from 'preact';
import style from './style.css';

export interface Props {
  year: number;
  month: number;
  date: number;
  week: number;
  count: number;
}

const ToolTip = ({ year, month, date, week, count }: Props): h.JSX.Element => {
  const monthStr: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <div className={style.container}>
      <div data-week={week}>
        {`${count} pomodoro on ${monthStr[month]} ${date}, ${year}`}
      </div>
    </div>
  );
};

export { ToolTip };
