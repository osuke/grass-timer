import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { GlobalStateContext } from '../Provider';
import moment from 'moment';
import style from './style.css';
import { Col } from './Col';
import { Cell } from './Cell';
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

  const renderActivities = (): h.JSX.Element[] => {
    const colNum = Array.from(Array(53).keys());

    const cols: h.JSX.Element[] = [...colNum].map((weekVal, weekIndex) => {
      if (weekIndex !== 0) {
        today.add(-1, 'week');
      }

      return (
        <Col>
          {
            [0, 1, 2, 3, 4, 5, 6].map((dateVal, dateIndex) => {
              const dateData = today.endOf('week').subtract(dateIndex, 'days');
              const count = checkActivity(dateData.format('YYYY-MM-DD'));
              let level = 0;

              if (count) {
                level = getLevel(count, levelArr);
                // tslint:disable-next-line
                //console.log(level);
              }

              return (
                <Cell
                  date={dateData.date()}
                  month={dateData.month() + 1}
                  level={level}
                />
              );
            })
          }
        </Col>
      );
    });

    return cols;
  };

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
