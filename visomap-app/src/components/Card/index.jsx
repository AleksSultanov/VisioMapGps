import PropTypes from "prop-types";
import classes from "./styles.module.css";
import { BsFillGeoFill, BsFillMapFill, BsXCircle } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import classNames from "classnames";

export function Card({
  idx = "0",
  imglink,
  caption,
  maplink,
  isGeoMenu = false,
  mapZiplink = "",
  gpxZiplink = "",
  menuOpen = false,
  setMenuOpenIdx = null,
}) {
  function MenuOpenClose() {
    if (menuOpen) {
      setMenuOpenIdx("0");
    } else {
      setMenuOpenIdx(idx);
    }
  }

  return (
    <div className={classes.box}>
      <a href={maplink}>
        <img src={imglink} className={classes.img} />
      </a>
      <div className={classes.boxfooter}>
        <a href={maplink} className={classes.title}>
          {caption}
        </a>
        {isGeoMenu && (
          <div className={classes.boxmenu}>
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
            <div
              className={classNames(
                classes.menu,
                menuOpen ? classes.menu__active : ""
              )}
            >
              <ul className={classes.menu__items}>
                <li className={classes.menu__item}>
                  <a
                    href={gpxZiplink}
                    className={classes.menu__item_link}
                    title="Скачать треки текущей карты"
                  >
                    <BsFillGeoFill
                      className={classNames(
                        classes.item_point,
                        classes.item_img
                      )}
                    />
                    Треки
                  </a>
                </li>
                <li className={classes.menu__item}>
                  <a
                    href={mapZiplink}
                    className={classes.menu__item_link}
                    title="Скачать карту визуализации для локального просмотра"
                  >
                    <BsFillMapFill
                      className={classNames(classes.item_map, classes.item_img)}
                    />
                    Карта
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  idx: PropTypes.string,
  imglink: PropTypes.string,
  caption: PropTypes.string,
  maplink: PropTypes.string,
  isGeoMenu: PropTypes.bool,
  mapZiplink: PropTypes.string,
  gpxZiplink: PropTypes.string,
  menuOpen: PropTypes.bool,
  setMenuOpenIdx: PropTypes.any,
};
