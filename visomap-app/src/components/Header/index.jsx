import { NavLink } from 'react-router-dom';
import classes from './styles.module.css';
import { ROUTE_PATHES } from '../../router/pathes';

function setActiveClass({ isActive }) {
  return isActive ? classes.isActive : '';
}

export function Header() {
  return (
    <div className={classes.box}>
      <ul className={classes.headers}>
        <li className={classes.hlinks}>
          <NavLink to={ROUTE_PATHES.base} className={setActiveClass}>
            Все треки
          </NavLink>
        </li>
        <li className={classes.hlinks}>
          <NavLink to={ROUTE_PATHES.places} className={setActiveClass}>
            Треки по местам
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
