import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Card } from "../components/Card/index.jsx";
import { tracks } from "../data/traks.jsx";
import { places } from "../data/place.jsx";
import { fimglink, fplace, fmaplink, fdateDscr } from "../data/utl.jsx";
import classes from "./styles.module.css";
import { useState } from "react";

import { MenuContext } from "../store/context.jsx";

export function Places() {
  const [openMenuId, setOpenMenuId] = useState(null);
  function onOpenMenuId(id) {
    setOpenMenuId(id);
  }
  const strlocation = useLocation();
  const prm = queryString.parse(strlocation.search);

  let placetrack = {};
  if (Object.keys(prm).includes("place")) {
    placetrack = tracks.filter((track) =>
      (track.place + ",").includes(prm.place + ",")
    );
  }

  if (Object.keys(prm).includes("year")) {
    placetrack = tracks.filter((track) => {
      let datestr = track.date;
      let a_date = datestr.split(",");
      if (a_date.length === 0) {
        return false;
      }
      return (
        a_date[0].substring(0, 4) === prm.year ||
        (a_date.length === 2 && a_date[1].substring(0, 4) === prm.year)
      );
    });
  }

  if (Object.keys(prm).includes("date")) {
    placetrack = tracks.filter((track) =>
      (track.date + ",").includes(prm.date + ",")
    );
  }

  const isPlace = placetrack.length > 0;

  if (!isPlace) {
    Object.keys(places).map((index) => {
      let p = tracks.filter((track) =>
        (track.place + ",").includes(index + ",")
      );
      places[index]["cnt"] = p.length;
    });
  }

  return (
    <>
      <MenuContext.Provider
        value={{
          openMenuId,
          onOpenMenuId,
        }}
      >
        <div className={classes.box}>
          {!isPlace &&
            Object.keys(places).map((index) => {
              return (
                <Card
                  key={index}
                  imglink={fimglink("", places[index].cover)}
                  caption={places[index].name}
                  maplink={fplace(index)}
                  cnt={places[index].cnt}
                />
              );
            })}
          {isPlace > 0 &&
            placetrack.map((track) => {
              return (
                <Card
                  key={track.map}
                  idx={track.map}
                  imglink={fimglink(track.map, track.cover)}
                  caption={`${track.dscr}`}
                  textdata={`${fdateDscr(track.date)}`}
                  maplink={fmaplink(track.map)}
                  isGeoMenu
                  menuOpen={openMenuId === track.map}
                  setMenuOpenIdx={onOpenMenuId}
                />
              );
            })}
        </div>
      </MenuContext.Provider>
    </>
  );
}
