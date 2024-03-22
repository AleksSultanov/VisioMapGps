import PropTypes from "prop-types";
import classes from "./styles.module.css";
import { MonthName, fimglink, fdatelink } from "../../data/utl";
import classNames from "classnames";

export function MonthCard({ ymonth, data }) {
  const month = Number(ymonth.substr(4, 2));
  const year = ymonth.substr(0, 4);
  const nameMonth = MonthName(month);
  const cntDays = new Date(year, month, 0).getDate();
  let idxDay = new Date(year, month - 1, 1).getDay();
  if (idxDay === 0) {
    idxDay = 6;
  } else {
    idxDay = idxDay - 1;
  }
  let i = 1;
  let days = [];

  while (i <= idxDay) {
    days[i] = { day: "", key: ymonth + "X" + i };
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
        slink = fdatelink(row["link"]);
      }
    });

    days[i + idxDay] = {
      day: i,
      imglink: imglink,
      maplink: slink,
      key: daystr,
    };
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
            <div key={day["key"]}>
              {!day["imglink"] && (
                <div className={classes.day}>{day["day"]}</div>
              )}
              {day["imglink"] && (
                <div className={classes.boximg}>
                  <a href={day["maplink"]} className={classes.linkImg}>
                    <img src={day["imglink"]} className={classes.img} />
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

MonthCard.propTypes = {
  ymonth: PropTypes.string,
  data: PropTypes.any,
};
