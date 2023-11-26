import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Card } from '../components/Card/index.jsx';
import { places, tracks } from '../data/traks.jsx';
import { fimglink, fplace, fmaplink } from '../data/utl.jsx';
import classes from './styles.module.css';


export function Places() {
  const strlocation = useLocation();
  const prm = queryString.parse(strlocation.search);
  
  let placetrack = {};
  if(Object.keys(prm).includes('place')){
    placetrack = tracks.filter((track) => track.place === prm.place);
  }  

  if(Object.keys(prm).includes('year')){
    placetrack = tracks.filter((track) => track.year === prm.year);
  }  

  const isPlace = placetrack.length > 0;


  return (
    <>
      <div className={classes.box}>
        { !isPlace &&
          Object.keys(places).map((index) => {
            return (
              <Card
                key={index}
                imglink = {fimglink(places[index].cover)}
                caption = {places[index].name}
                maplink = {fplace(index)}
            />  
            );
          })
        }
        { isPlace > 0 &&
          placetrack.map((track) => {
            return (
              <Card
                key={track.map}
                imglink = {fimglink(track.cover)}
                caption = {track.dscr}
                maplink = {fmaplink(track.map)}
                isGeoMenu
            />  
            );
          })
        }
      </div>
    </>
  );
}
