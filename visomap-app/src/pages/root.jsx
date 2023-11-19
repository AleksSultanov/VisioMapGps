import { Card } from '../components/Card/index.jsx';
import { tracks } from '../data/traks.jsx';
import classes from './styles.module.css';

export function Root() {
  return (
    <>
      <div className={classes.box}>
        {tracks?.length > 0 &&
          tracks.map((track) => {
            return (
              <Card
                key={track.map}
                imglink = {track.cover}
                caption = {track.dscr}
                maplink = {track.map}
            />  
            );
          })
        }
      </div>
    </>
  );
}
