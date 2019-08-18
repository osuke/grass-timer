import { h } from 'preact';
import moment from 'moment';
import style from './style.css';
import { Col } from './Col';
import { Cell } from './Cell';

const Calendar = (props: {}): h.JSX.Element => {
  const today = moment();
  // tslint:disable-next-line
  //console.log(today.endOf('week').date());
  // tslint:disable-next-line
  //console.log(today.endOf('week').subtract(1, 'days').date());

  const renderActivities = (): h.JSX.Element[] => {
    const colNum = Array.from(Array(53).keys());

    const cols: h.JSX.Element[] = [...colNum].map((weekVal, weekIndex) => {
      if (weekIndex !== 0) {
        today.add(-1, 'week');
      }
      // tslint:disable-next-line
      console.log(today.endOf('week').date());
      return (
        <Col>
          {
            [0, 1, 2, 3, 4, 5, 6].map((dateVal, dateIndex) => {
              const dateData = today.endOf('week').subtract(dateIndex, 'days');
              return (
                <Cell
                  date={dateData.date()}
                  month={dateData.month() + 1}
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
