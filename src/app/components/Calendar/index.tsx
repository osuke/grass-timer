import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { GlobalStateContext } from '../Provider';
import moment from 'moment';
import style from './style.css';
import { Col } from './Col';
import { Cell, Props as CellProps } from './Cell';
import { getActivityLevel, getLevel } from '../../utils';

const Calendar = (props: {}): h.JSX.Element => {
  const { state } = useContext(GlobalStateContext);
  const today = moment();
  const levelArr = getActivityLevel(state.log);

  const checkActivity = (logKey: string): number => {
    let count = 0;

    state.log.forEach((log) => {
      if (log.key === logKey) {
        count =  log.count;
      }
    });

    return count;
  };

  function renderActivities(): h.JSX.Element[] {
    const weekNum = 53;
    const dayNum = 7;
    const colNum = Array.from(Array(weekNum).keys());
    const celNum = Array.from(Array(dayNum).keys());

    const cols: h.JSX.Element[] = [...colNum].map((weekVal, weekIndex) => {
      if (weekIndex !== 0) {
        today.add(-1, 'week');
      }

      return (
        <Col>
          {
            [...celNum].map((dateVal, dateIndex) => {
              const dateData = today.endOf('week').subtract(dateIndex, 'days');
              const count = checkActivity(dateData.format('YYYY-MM-DD'));
              const cellProps: CellProps = {
                year: dateData.year(),
                month: dateData.month(),
                date: dateData.date(),
                week: weekIndex,
                level: count ? getLevel(count, levelArr) : 0,
                count,
              };

              return <Cell {...cellProps} />;
            })
          }
        </Col>
      );
    });

    return cols;
  }

  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.cal}>
          {renderActivities()}
        </div>
      </div>
    </div>
  );
};

export { Calendar };
