import { Card } from '../components/Card/index.jsx';
import { places } from '../data/traks.jsx';
import { BASE_PAGE } from '../data/const.jsx';
import classes from './styles.module.css';


export function Places() {
  return (
    <>
      <div className={classes.box}>
        {
          Object.keys(places).map((index) => {
            return (
              <Card
                key={index}
                imglink = {'../'+places[index].cover}
                caption = {places[index].name}
                maplink = {BASE_PAGE+'place/'+index+'/'}
            />  
            );
          })
        }
      </div>
    </>
  );
}
