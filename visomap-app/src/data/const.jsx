export const BASE_PAGE = "/VisioMapGps/";

export function fimglink(link){
    return `${BASE_PAGE}cover/${link}`;
  }
export function fmaplink(link){
    return `${BASE_PAGE}map/${link}`;
  }
export  function fplace(link){
    return `${BASE_PAGE}places?place=${link}`;
  }
