export const BASE_PAGE = "/VisioMapGps/";

export function fimglink(cover){
    return `${BASE_PAGE}cover/${cover}`;
  }
export function fmaplink(map){
    return `${BASE_PAGE}map/${map}`;
  }
export  function fplace(link){
    return `${BASE_PAGE}places?place=${link}`;
  }

 export function fmapziplink(map){
    const mapZip = map.slice(0,-4)+'zip';
    return `${BASE_PAGE}zipMap/${mapZip}`;
  }

  export function fgpxziplink(map){
    const gpxZip = 'gpx'+map.slice(3,-4)+'zip';
    return `${BASE_PAGE}zipGpx/${gpxZip}`;
  }