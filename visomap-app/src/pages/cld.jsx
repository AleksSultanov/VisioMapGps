import { Calendar } from "../components/Calendar/index.jsx";
import { tracks } from "../data/traks.jsx";
import classes from "./styles.module.css";

export function Cld() {
  let calendar = {};

  tracks.map((track) => {
    let sdatelst = track["date"];
    if (sdatelst != undefined) {
      let a_date = sdatelst.split(",");
      a_date.map((date) => {
        let sdate = date.substring(0, 8);
        if (!Object.keys(calendar).includes(sdate) && sdate.length === 8) {
          calendar[sdate] = {
            date: sdate,
            map: track["map"],
            cover: track["cover"],
          };
        }
      });
    }
  });

  let calendarM = {};

  Object.keys(calendar).map((day) => {
    let m = day.substring(0, 6);
    if (!Object.keys(calendarM).includes(m)) {
      calendarM[m] = [calendar[day]];
    } else {
      calendarM[m].push(calendar[day]);
    }
  });
  return (
    <>
      <div className={classes.page}>
        <Calendar data={calendarM} />
      </div>
    </>
  );
}
