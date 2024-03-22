import PropTypes from "prop-types";
import classes from "./styles.module.css";
import classNames from "classnames";
import { MonthCard } from "./monthCard";

export function Calendar({ data, asc = false }) {
  let Months = [];

  Object.keys(data)
    .sort(function (a, b) {
      let result = 0;
      if (a > b) {
        result = 1;
      }
      if (a < b) {
        result = -1;
      }
      if (!asc) result = result * -1;
      return result;
    })
    .map((day) => {
      Months.push(day);
    });

  return (
    <div className={classes.box}>
      <div className={classes.topbox}>
        <div className={classes.title}>Календарь</div>
        <div className={classNames(classes.weekdays, classes.grid)}>
          {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"].map((day) => {
            return (
              <div className={classes.weekday} key={"week" + day}>
                {day}
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.calendar}>
        {Months?.length > 0 &&
          Months.map((m) => {
            return <MonthCard key={m} ymonth={m} data={data[m]} />;
          })}
      </div>
    </div>
  );
}

Calendar.propTypes = {
  data: PropTypes.any,
  asc: PropTypes.bool,
};
