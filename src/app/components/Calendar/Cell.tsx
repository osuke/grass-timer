import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';
import { ToolTip, Props as ToolTipProps } from '../ToolTip';
import { getLevel } from '../../utils';

export interface Props {
  year: number;
  month: number;
  date: number;
  week: number;
  level: number;
  count: number;
}

const Cell = ({ year, month, date, week, level, count }: Props): h.JSX.Element => {
  const [active, toggle] = useState(false);
  const toolTipProps: ToolTipProps = {
    year,
    month,
    date,
    week,
    count,
  };

  const getClassName = (): string => {
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

    return levelClassName;
  };

  return (
    <div
      className={`${style.cell} ${getClassName()}`}
      onMouseOver={() => { toggle(!active); }}
      onMouseOut={() => { toggle(!active); }}
    >
      {active && <ToolTip {...toolTipProps} />}
    </div>
  );
};

export { Cell };
