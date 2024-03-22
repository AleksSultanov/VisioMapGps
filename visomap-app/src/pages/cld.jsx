import { Calendar } from "../components/Calendar/index.jsx";
import { tracks } from "../data/traks.jsx";
import classes from "./styles.module.css";

function getNumberOfDays(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
}

function getDateStr(date) {
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    }
    return "" + number;
  }
  return date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate());
}

export function Cld() {
  let calendar = {};

  tracks.map((track) => {
    let sdatelst = track["date"];
    if (sdatelst != undefined) {
      let a_date = sdatelst.split(",");
      let cntday = 0;
      const date1 = a_date[0];
      if (date1.length == 8) {
        const dd1 = new Date(
          date1.substring(0, 4),
          Number(date1.substring(4, 6)) - 1,
          Number(date1.substring(6, 8))
        );
        let tmpDate = dd1;
        if (a_date.length > 1) {
          const date2 = a_date[1];
          if (date2.length === 8) {
            const dd2 = new Date(
              date2.substring(0, 4),
              Number(date2.substring(4, 6)) - 1,
              Number(date2.substring(6, 8))
            );
            cntday = getNumberOfDays(dd1, dd2);
          }
        }
        let i = 0;
        let startTime = dd1.getTime();
        while (i <= cntday) {
          tmpDate = new Date(startTime + i * 24 * 3600 * 1000);
          let sdate = getDateStr(tmpDate);
          if (!Object.keys(calendar).includes(sdate)) {
            calendar[sdate] = {
              date: sdate,
              link: date1,
              map: track["map"],
              cover: track["cover"],
            };
          }
          i++;
        }
      }
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
