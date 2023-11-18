import PropTypes from 'prop-types';
import classes from './styles.module.css';
import burger from '../../assets/menu_burger.svg';

export function Card({imglink ,caption, maplink}) {
  
  return (
    <div className={classes.box}>
        <a href={maplink}>
          <img src={imglink} className={classes.img}/>
        </a>   
        <div className={classes.boxfooter}>
          <a href={maplink} className={classes.title}>
            {caption}
          </a>  
         <img src={burger} className={classes.button}/>
       </div> 
       
      
     </div>
  )
}

Card.propTypes = {
  imglink: PropTypes.string,
  caption: PropTypes.string,
  maplink: PropTypes.string,
};