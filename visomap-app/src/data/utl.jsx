export const BASE_PAGE = "/VisioMapGps/";

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
