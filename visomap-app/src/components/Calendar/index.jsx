import PropTypes from "prop-types";
import classes from "./styles.module.css";
import { MonthName, fimglink, fdatelink } from "../../data/utl";
import classNames from "classnames";

export function CldMonth({ ymonth, data }) {
  const month = Number(ymonth.substr(4, 2));
  const year = ymonth.substr(0, 4);
  const nameMonth = MonthName(month);
  const cntDays = new Date(year, month, 0).getDate();
  const idxDay = new Date(year, month - 1, 1).getDay() - 1;
  let i = 1;
  let days = [];

  while (i <= idxDay) {
    days[i] = { day: "" };
    i++;
  }
  i = 1;
  while (i <= cntDays) {
    let daystr = "";
    if (i < 10) {
      daystr = ymonth + "0" + i;
    } else {
      daystr = ymonth + i;
    }
    let imglink = "";
    let slink = "";
    data.map((row) => {
      if (row["date"] === daystr) {
        imglink = fimglink(row["map"], row["cover"]);
        slink = fdatelink(daystr);
      }
    });

    days[i + idxDay] = { day: i, imglink: imglink, maplink: slink };
    i++;
  }
  return (
    <div className={classes.main}>
      <div className={classes.caption}>
        {nameMonth} {year}
      </div>
      <div className={classNames(classes.month, classes.grid)}>
        {days.map((day) => {
          return (
            <div key={day["day"]}>
              {!day["imglink"] && (
                <div className={classes.day}>{day["day"]}</div>
              )}
              {day["imglink"] && (
                <div className={classes.boximg}>
                  <a href={day["maplink"]} className={classes.linkImg}>
                    <img src={day["imglink"]} className={classes.day} />
                    <div className={classNames(classes.day, classes.dayImg)}>
                      {day["day"]}
                    </div>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

CldMonth.propTypes = {
  ymonth: PropTypes.string,
  data: PropTypes.any,
};

export function Calendar({ data }) {
  let Months = [];

  Object.keys(data)
    .sort(function (a, b) {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
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
              <div className={classes.weekday} key={day}>
                {day}
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.calendar}>
        {Months?.length > 0 &&
          Months.map((m) => {
            return <CldMonth key={m} ymonth={m} data={data[m]} />;
          })}
      </div>
    </div>
  );
}

Calendar.propTypes = {
  data: PropTypes.any,
};
