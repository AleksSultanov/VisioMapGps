import { Card } from '../components/Card/index.jsx';
import classes from './styles.module.css';


const tracks = [{id: 1, map: "map2023.html", cover:"cover2023.jpg", dscr: "Походы 2023"},
                {id: 2, map: "map2022.html", cover:"cover2022.jpg", dscr: "Походы 2022"},    
                {id: 3, map: "mapKarankul.html", cover:"coverKarankul.jpg", dscr: "Каранкуль. Все походы"},    
                {id: 4, map: "mapPalatau20220925.html", cover:"coverPalatau20220925.jpg", dscr: "Пальтау круговой маршрут через березовую рощу 25 сентября 2022"},    
                {id: 5, map: "mapPalatau20230416.html", cover:"cover20230416.jpg", dscr: "Чукураксу и Пальтау круговой маршрут через березовую рощу 16 апреля 2023"},    
                {id: 6, map: "mapPalatau20231022.html", cover:"coverPalatau20231022.jpg", dscr: "Чукураксу и Пальтау через сады на машине до водопада 22 ноября 2023"},    
                {id: 7, map: "mapSinegorie.html", cover:"coverSinegorie.jpg", dscr: "Синегорье 04 июня 2022"},    
                {id: 8, map: "mapБадак2022.html", cover:"coverБадак2022.jpg", dscr: "Озеро Бадак 15 мая 2022"},    
                {id: 9, map: "mapСукок2022.html", cover:"coverСукок2022.jpg", dscr: "Сукок Бадак 3 апреля 2022"}
                ];     

export function Root() {
  return (
    <>
      <div className={classes.box}>
        {tracks?.length > 0 &&
          tracks.map((track) => {
            return (
              <Card
                key={track.id}
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
