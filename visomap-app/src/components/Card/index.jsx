import PropTypes from 'prop-types';
import classes from './styles.module.css';
import burger from '../../assets/menu_burger.svg';

export function Card({imglink ,caption, maplink}) {
  
  // const elemRef = useRef();
  // const [coords, setCoords] = useState('');

  // useEffect(() => {
  //   const coords = elemRef.current.getBoundingClientRect();
  //   setCoords('top='+Math.trunc(coords.top)+'\nright='+Math.trunc(coords.right)+'\nleft='+Math.trunc(coords.left)+'\nbottom='+Math.trunc(coords.bottom) );
  // },[]);

 
  return (
    <div className={classes.box}>
        <a href={maplink}>
          <img src={imglink} className={classes.img}/>
        </a>   
        <div className={classes.boxfooter}>
        <a href={maplink} className={classes.title}>
          {caption}
        </a> 
        <img src={burger} 
             className={classes.button}
         />
         <br/>
         
       </div> 
       
      
     </div>
  )
}

Card.propTypes = {
  imglink: PropTypes.string,
  caption: PropTypes.string,
  maplink: PropTypes.string,
};