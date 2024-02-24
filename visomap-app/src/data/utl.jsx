export const BASE_PAGE = "/VisioMapGps/";

function MonthStr(Month) {
  switch (Number(Month)) {
    case 1:
      return "января";
    case 2:
      return "февраля";
    case 3:
      return "марта";
    case 4:
      return "апреля";
    case 5:
      return "мая";
    case 6:
      return "июня";
    case 7:
      return "июля";
    case 8:
      return "августа";
    case 9:
      return "сентября";
    case 10:
      return "октября";
    case 11:
      return "ноября";
    case 12:
      return "декабря";
    default:
      return "";
  }
}

export function fimglink(map = "", cover) {
  let file = cover;
  if (map !== "") {
    file = "cover" + map.slice(3, -4) + cover;
  }
  return `${BASE_PAGE}cover/${file}`;
}
export function fmaplink(map) {
  return `${BASE_PAGE}map/${map}`;
}
export function fplace(link) {
  return `${BASE_PAGE}places?place=${link}`;
}

export function fmapziplink(map) {
  const mapZip = map.slice(0, -4) + "zip";
  return `${BASE_PAGE}zipMap/${mapZip}`;
}

export function fgpxziplink(map) {
  const gpxZip = "gpx" + map.slice(3, -4) + "zip";
  return `${BASE_PAGE}zipGpx/${gpxZip}`;
}

function fday(daystr) {
  const day = Number(daystr);
  if (day === 0) return "";
  return day;
}
export function fdateDscr(sdatelst) {
  if (sdatelst === "") {
    return "";
  }

  const a_date = sdatelst.split(",");
  if (a_date.length === 0) {
    return "";
  }
  const yearFrom = a_date[0].substr(0, 4);
  const monthFrom = a_date[0].substr(4, 2);
  const dayFrom = a_date[0].substr(6, 2);

  if (a_date.length === 1) {
    return `${fday(dayFrom)} ${MonthStr(monthFrom)} ${yearFrom} `;
  } else {
    const yearTo = a_date[1].substr(0, 4);
    const monthTo = a_date[1].substr(4, 2);
    const dayTo = a_date[1].substr(6, 2);
    if (yearFrom != yearTo) {
      return `${fday(dayFrom)} ${MonthStr(monthFrom)} ${yearFrom} - ${fday(
        dayTo
      )} ${MonthStr(monthTo)} ${yearTo}`;
    }
    if (monthFrom != monthTo) {
      return `${fday(dayFrom)} ${MonthStr(monthFrom)} - ${fday(
        dayTo
      )} ${MonthStr(monthTo)} ${yearTo}`;
    }

    return `${fday(dayFrom)} - ${fday(dayTo)} ${MonthStr(monthTo)} ${yearTo}`;
  }
}
