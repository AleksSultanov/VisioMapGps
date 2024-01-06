import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Card } from "../components/Card/index.jsx";
import { tracks } from "../data/traks.jsx";
import { places } from "../data/place.jsx";
import { fimglink, fplace, fmaplink } from "../data/utl.jsx";
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
    placetrack = tracks.filter((track) =>
      (track.year + ",").includes(prm.year + ",")
    );
  }

  const isPlace = placetrack.length > 0;

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
                  caption={track.dscr}
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
