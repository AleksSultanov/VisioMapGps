import { Card } from '../components/Card/index.jsx';
import { tracks } from '../data/traks.jsx';
import { useParams } from 'react-router-dom';
import classes from './styles.module.css';


export function Place() {
  const params = useParams();
  const placetrack = tracks.filter((track) => track.place === params.id);
  return (
    <>
      <div className={classes.box}>
        {placetrack?.length > 0 &&
          placetrack.map((track) => {
            return (
              <Card
                key={track.id}
                imglink = {'../../'+track.cover}
                caption = {track.dscr}
                maplink = {'../../'+track.map}
            />  
            );
          })
        }
      </div>
    </>
  );
}
