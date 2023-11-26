import classes from './styles.module.css';

import { Card } from '../components/Card/index.jsx';
import { tracks } from '../data/traks.jsx';
import { fimglink, fmaplink, fmapziplink, fgpxziplink } from '../data/utl.jsx';



export function Root() {
  return (
    <>
      <div className={classes.box}>
        {tracks?.length > 0 &&
          tracks.map((track) => {
            return (
              <Card
                key={track.map}
                imglink = {fimglink(track.cover)}
                caption = {track.dscr}
                maplink = {fmaplink(track.map)}
                isGeoMenu
                mapZiplink={fmapziplink(track.map)}
                gpxZiplink={fgpxziplink(track.map)}
            />  
            );
          })
        }
      </div>
    </>
  );
}
