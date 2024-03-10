import PropTypes from "prop-types";
import classes from "./styles.module.css";
import { FcMenu } from "react-icons/fc";
import { BsXCircle } from "react-icons/bs";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { ROUTE_PATHES } from "../../../router/pathes";
import { useState } from "react";

export function MainMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  function MenuOpenClose() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={classes.boxmenu}>
      <div className="boxMenubtn">
        {!menuOpen && (
          <FcMenu
            className={classes.button}
            onClick={MenuOpenClose}
            title="Открыть меню"
          />
        )}
        {menuOpen && (
          <BsXCircle
            className={classes.button}
            onClick={MenuOpenClose}
            title="Закрыть меню"
          />
        )}
      </div>
      <div
        className={classNames(
          classes.menu,
          menuOpen ? classes.menu__active : ""
        )}
      >
        <ul className={classes.menu__items}>
          <li className={classes.menu__item}>
            <NavLink to={ROUTE_PATHES.base} onClick={MenuOpenClose}>
              Все треки
            </NavLink>
          </li>
          <li className={classes.menu__item}>
            <NavLink to={ROUTE_PATHES.places} onClick={MenuOpenClose}>
              Треки по местам
            </NavLink>
          </li>
          <li className={classes.menu__item}>
            <NavLink to={ROUTE_PATHES.years} onClick={MenuOpenClose}>
              Треки по годам
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

MainMenu.propTypes = {
  menuOpen: PropTypes.bool,
};
