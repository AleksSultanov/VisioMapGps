import classes from "./styles.module.css";

import { useState } from "react";
import { Card } from "../components/Card/index.jsx";
import { tracks } from "../data/traks.jsx";
import {
  fimglink,
  fmaplink,
  fmapziplink,
  fgpxziplink,
  fdateDscr,
} from "../data/utl.jsx";

import { MenuContext } from "../store/context.jsx";

export function Root() {
  const [openMenuId, setOpenMenuId] = useState(null);
  function onOpenMenuId(id) {
    setOpenMenuId(id);
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
          {tracks?.length > 0 &&
            tracks.map((track) => {
              return (
                <Card
                  idx={track.map}
                  key={track.map}
                  imglink={fimglink(track.map, track.cover)}
                  caption={`${track.dscr}`}
                  textdata={`${fdateDscr(track.date)}`}
                  maplink={fmaplink(track.map)}
                  isGeoMenu
                  mapZiplink={fmapziplink(track.map)}
                  gpxZiplink={fgpxziplink(track.map)}
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
