const tracks = [
  {
    map: "map2023.html",
    cover: "jpg",
    dscr: "Походы",
    place: "akbulak,beldersay,palatau,chukuraksu,acsacata,urungach,tereklisay",
    date: "2023",
  },
  {
    map: "mapPalatau20231022.html",
    cover: "jpg",
    dscr: "Чукураксу и Пальтау через сады на машине до водопада в поселке ",
    place: "palatau,chukuraksu",
    date: "20231022",
  },
  {
    map: "mapPalatau20230930.html",
    cover: "gif",
    dscr: "Пальтау через сады на машине и пешком до водопада",
    place: "palatau",
    date: "20230930",
  },
  {
    map: "mapAcsacota20230624.html",
    cover: "gif",
    dscr: "Аксаката пикник",
    place: "acsacata",
    date: "20230624",
  },
  {
    map: "mapPalatau20230603.html",
    cover: "gif",
    dscr: "Акбулак 3 июня 2023",
    place: "akbulak,tereklisay",
    date: "20230603",
  },
  {
    map: "mapBeldersay20230528.html",
    cover: "gif",
    dscr: "Бельдерсай, мраморная речка",
    place: "beldersay",
    date: "20230528",
  },
  {
    map: "mapAcsacota20230506.html",
    cover: "gif",
    dscr: "Маковое поле, Аксаката",
    place: "acsacata",
    date: "20230506",
  },
  {
    map: "mapPalatau20230416.html",
    cover: "jpg",
    dscr: "Чукураксу и Пальтау круговой маршрут через березовую рощу",
    place: "palatau,chukuraksu",
    date: "20230416",
  },
  {
    map: "mapUrungach20230409.html",
    cover: "gif",
    dscr: "Урунгач",
    place: "urungach",
    date: "20230409",
  },
  {
    map: "map2022.html",
    cover: "gif",
    dscr: "Походы",
    place:
      "karakiya,ispay,koksu,palatau,acsacata,sinegorie,badak,azadbash,tavaksay,charvak,nanay,sukok,chukuraksu,lashkerek,urungach",
    date: "2022",
  },
  {
    map: "mapUrungach20221127.html",
    cover: "gif",
    dscr: "Урунгач",
    place: "urungach",
    date: "20221127",
  },

  {
    map: "mapKarakiya20221112.html",
    cover: "gif",
    dscr: "Каракия пикник",
    place: "karakiya",
    date: "20221112",
  },
  {
    map: "mapIspay20221009.html",
    cover: "gif",
    dscr: "Испай пикник",
    place: "ispay",
    date: "20221009",
  },
  {
    map: "mapKoksu20221002.html",
    cover: "gif",
    dscr: "Кок-су пикник",
    place: "koksu",
    date: "20221002",
  },
  {
    map: "mapPalatau20220925.html",
    cover: "jpg",
    dscr: "Пальтау круговой маршрут через березовую рощу",
    place: "palatau",
    date: "20220925",
  },
  {
    map: "mapAcsacota20220623.html",
    cover: "gif",
    dscr: "Аксаката пикник",
    place: "acsacata",
    date: "20220623",
  },
  {
    map: "mapKarakiya20220616.html",
    cover: "gif",
    dscr: "Каракия пикник",
    place: "karakiya",
    date: "20220616",
  },
  {
    map: "mapSinegorie.html",
    cover: "jpg",
    dscr: "Синегорье",
    place: "sinegorie",
    date: "20220604",
  },
  {
    map: "mapБадак2022.html",
    cover: "gif",
    dscr: "Озеро Бадак",
    place: "badak",
    date: "20220515",
  },
  {
    map: "mapAzadbash.html",
    cover: "gif",
    dscr: "Разведка в Азадбаш",
    place: "azadbash,tavaksay",
    date: "20220501",
  },
  {
    map: "mapCharvack20220424.html",
    cover: "gif",
    dscr: "Вокруг чарвака",
    place: "charvak",
    date: "20220424",
  },
  {
    map: "mapNanay20220424.html",
    cover: "gif",
    dscr: "Нанай",
    place: "nanay",
    date: "20220424",
  },
  {
    map: "mapСукок2022.html",
    cover: "gif",
    dscr: "Сукок",
    place: "sukok",
    date: "20220403",
  },
  {
    map: "mapPalatau20220220.html",
    cover: "gif",
    dscr: "Чукураксу-Пальтау",
    place: "palatau,chukuraksu",
    date: "20220220",
  },
  {
    map: "mapLashkerek20220109.html",
    cover: "gif",
    dscr: "Лашкерек",
    place: "lashkerek",
    date: "20220109",
  },
  {
    map: "map2021.html",
    cover: "gif",
    dscr: "Походы",
    place:
      "acsacata,badak,beldersay,novalisay,palatau,tereklisay,karakiya,ispay,lashkerek,surenata,tavaksay,sukok,urungach",
    date: "2021",
  },
  {
    map: "mapPalatau20211212.html",
    cover: "gif",
    dscr: "Пальтау березовая роща через сады",
    place: "palatau",
    date: "20211212",
  },
  {
    map: "mapPalatau20211204.html",
    cover: "gif",
    dscr: "Пальтау березовая роща круговой",
    place: "palatau",
    date: "20211204",
  },
  {
    map: "mapNovalisay20211031.html",
    cover: "gif",
    dscr: "Навалисай",
    place: "novalisay",
    date: "20211031",
  },
  {
    map: "mapTereklisay20211017.html",
    cover: "gif",
    dscr: "Тереликсай",
    place: "tereklisay,palatau",
    date: "20211017",
  },
  {
    map: "mapNovalisay20211003.html",
    cover: "gif",
    dscr: "Навалисай",
    place: "novalisay",
    date: "20211003",
  },
  {
    map: "mapKarakiya20210926.html",
    cover: "gif",
    dscr: "Каракия пикник",
    place: "karakiya",
    date: "20210926",
  },
  {
    map: "mapAcsacota20210919.html",
    cover: "gif",
    dscr: "Аксаката пикник",
    place: "acsacata",
    date: "20210919",
  },
  {
    map: "mapIspay20210613.html",
    cover: "gif",
    dscr: "Испай до водопада",
    place: "ispay",
    date: "20210613",
  },
  {
    map: "mapLashkerek20210606.html",
    cover: "gif",
    dscr: "Лашкерек пикник",
    place: "lashkerek",
    date: "20210606",
  },
  {
    map: "mapSurenata20210530.html",
    cover: "gif",
    dscr: "Сюрената",
    place: "surenata,acsacata",
    date: "20210530",
  },
  {
    map: "mapBeldersay20210523.html",
    cover: "gif",
    dscr: "Бельдерсай петроглифы",
    place: "beldersay",
    date: "20210523",
  },
  {
    map: "mapBadak20210515.html",
    cover: "gif",
    dscr: "Озеро Бадак",
    place: "badak",
    date: "20210515",
  },
  {
    map: "mapPalatau20210502.html",
    cover: "gif",
    dscr: "Пальтау",
    place: "palatau",
    date: "20210502",
  },
  {
    map: "mapAcsacota20210425.html",
    cover: "gif",
    dscr: "Аксаката по верху",
    place: "acsacata",
    date: "20210425",
  },
  {
    map: "mapTavaksay20210411.html",
    cover: "gif",
    dscr: "Таваксай до водопада",
    place: "tavaksay",
    date: "20210411",
  },

  {
    map: "mapSukok20210403.html",
    cover: "gif",
    dscr: "Сукок",
    place: "sukok",
    date: "20210403",
  },

  {
    map: "mapUrungach20210102.html",
    cover: "gif",
    dscr: "Озеро Урунгач",
    place: "urungach",
    date: "20210102",
  },
  {
    map: "map2020.html",
    cover: "gif",
    dscr: "Походы",
    place: "palatau,ispay,beldersay,koksu,surenata,tuzkan",
    date: "2020",
  },
  {
    map: "mapKoksu20201108.html",
    cover: "gif",
    dscr: "Коксу до щели",
    place: "koksu",
    date: "20201108",
  },
  {
    map: "mapSurenata20201030.html",
    cover: "gif",
    dscr: "Сюрената",
    place: "surenata",
    date: "20201030",
  },
  {
    map: "mapPalatau20201017.html",
    cover: "gif",
    dscr: "Пальтау",
    place: "palatau",
    date: "20201017",
  },
  {
    map: "mapBeldersay20201010.html",
    cover: "gif",
    dscr: "Бельдерсай кольцо",
    place: "beldersay",
    date: "20201010",
  },
  {
    map: "mapIspay20200926.html",
    cover: "gif",
    dscr: "Испай до водопада",
    place: "ispay",
    date: "20200926",
  },
  {
    map: "mapTuzkan20200830.html",
    cover: "gif",
    dscr: "Тузкан",
    place: "tuzkan",
    date: "20200830,20200831",
  },
  {
    map: "mapSunInstitute20200315.html",
    cover: "gif",
    dscr: "Институт Солнце",
    place: "suninstitute",
    date: "20200315",
  },
  {
    map: "map2019.html",
    cover: "gif",
    dscr: "Походы",
    place: "arashan,charvak,tuzkan,oygaing",
    date: "2019",
  },
  {
    map: "mapCharvack20190928.html",
    cover: "gif",
    dscr: "Вокруг чарвака",
    place: "charvak",
    date: "20190928",
  },
  {
    map: "mapTuzkan20190831.html",
    cover: "gif",
    dscr: "Тузкан",
    place: "tuzkan",
    date: "20190831,20190901",
  },
  {
    map: "mapOygaing20190810.html",
    cover: "gif",
    dscr: "Ойгаинг",
    place: "oygaing",
    date: "20190810,20190811",
  },
  {
    map: "mapArashan20190803.html",
    cover: "gif",
    dscr: "Арашан",
    place: "arashan",
    date: "20190803,20190804",
  },
  {
    map: "mapKarankul20190509.html",
    cover: "gif",
    dscr: "Рыбалка на Каранкульском водохранилище",
    place: "karankul",
    date: "20190509",
  },
  {
    map: "mapTuyabuguz20190216.html",
    cover: "gif",
    dscr: "Рыбалка в лодке на Туябугузком водохранилище",
    place: "tuyabuguz",
    date: "20190216",
  },
  {
    map: "map2012-2018.html",
    cover: "gif",
    dscr: "Походы",
    place: "beldersay,karankul,chimgan,zarkent,sukok",
    date: "2012,2018",
  },
  {
    map: "mapBeldersay20180506.html",
    cover: "gif",
    dscr: "Бельдерсай 12 ванночек",
    place: "beldersay",
    date: "20180506",
  },
  {
    map: "mapShuruzyak20180603.html",
    cover: "gif",
    dscr: "Рыбалка на к. Шурузяк",
    place: "shuruzyak",
    date: "20180603",
  },
  {
    map: "mapTuyabuguz20170902.html",
    cover: "gif",
    dscr: "Рыбалка на Туябугузком водохранилище",
    place: "tuyabuguz",
    date: "20170902",
  },
  {
    map: "mapBeldersay20150927.html",
    cover: "gif",
    dscr: "Бельдерсай правая сторона",
    place: "beldersay",
    date: "20150927",
  },
  {
    map: "mapKarankul20150719.html",
    cover: "gif",
    dscr: "Чимган - Каранкуль",
    place: "karankul,chimgan",
    date: "20150719",
  },
  {
    map: "mapBeldersay20150510.html",
    cover: "gif",
    dscr: "Бельдерсай прогулка с МТС",
    place: "beldersay",
    date: "20150510",
  },
  {
    map: "mapBeldersay20140615.html",
    cover: "gif",
    dscr: "Бельдерсай петроглифы",
    place: "beldersay",
    date: "20140615",
  },
  {
    map: "mapKarankul20140525.html",
    cover: "gif",
    dscr: "Чимган - Каранкуль",
    place: "karankul,chimgan",
    date: "20140525",
  },
  {
    map: "mapKarankul.html",
    cover: "jpg",
    dscr: "Чимган - Каранкуль. Два похода",
    place: "karankul,chimgan",
    date: "2014,2015",
  },
  {
    map: "mapZarkentSukok20140504.html",
    cover: "gif",
    dscr: "Заркент - Сукок",
    place: "zarkent,sukok",
    date: "20140504",
  },
  {
    map: "mapChimganBeldersay2012-2013.html",
    cover: "gif",
    dscr: "Чимган - Бельдерсай",
    place: "chimgan,beldersay",
    date: "2012,2013",
  },
  {
    map: "mapChimganBelderday20130505.html",
    cover: "gif",
    dscr: "Чимган - Бельдерсай",
    place: "chimgan,beldersay",
    date: "20130505",
  },
  {
    map: "mapSyrdarya20120902.html",
    cover: "gif",
    dscr: "Рыбалка на р.Сырдарья",
    place: "syrdarya",
    date: "20120902",
  },
  {
    map: "mapBeldersayChimgan20120819.html",
    cover: "gif",
    dscr: "Бельдерсай - Чимган",
    place: "chimgan,beldersay",
    date: "20120819",
  },
  {
    map: "mapChimganBeldersay20120624.html",
    cover: "gif",
    dscr: "Чимган - Бельдерсай",
    place: "chimgan,beldersay",
    date: "20120624",
  },
  //City
  {
    map: "mapTashkent.html",
    cover: "gif",
    dscr: "Ташкент Прогулки",
    place: "tashkent",
    date: "2022,2023",
  },
  {
    map: "mapMoscow2023.html",
    cover: "gif",
    dscr: "Москва",
    place: "moscow",
    date: "20230222,20230304",
  },
  {
    map: "mapTashkent221106.html",
    cover: "gif",
    dscr: "Ташкент м.Мустакиллик - Анхор - Magic City",
    place: "tashkent",
    date: "20221106",
  },
  {
    map: "mapTashkent220417.html",
    cover: "gif",
    dscr: "Ташкент м.Амир - Темур - м.Миллий Бог",
    place: "tashkent",
    date: "20220417",
  },
  {
    map: "mapTashkent220410.html",
    cover: "gif",
    dscr: "Ташкент От Малики до Ахмад Дониш",
    place: "tashkent",
    date: "20220410",
  },
  {
    map: "mapSamarkandTalgo2016.html",
    cover: "gif",
    dscr: "Поезд из Ташкента в Самарканд",
    place: "tashkent,samarkand",
    date: "20160319",
  },
  {
    map: "mapSamarkand2016.html",
    cover: "gif",
    dscr: "г. Самарканд. Экскурсия",
    place: "samarkand",
    date: "20160319",
  },
  {
    map: "mapKL2017.html",
    cover: "gif",
    dscr: "прогулки по Куала-Лумпуру",
    place: "kl",
    date: "20170322,20170323",
  },
  {
    map: "mapThailand2017.html",
    cover: "gif",
    dscr: "Краби",
    place: "thailand,krabi",
    date: "20170324,20170405",
  },
];

let placeyears = {};

tracks.map((track) => {
  let map = track["map"];
  let sdatelst = track["date"];
  if (sdatelst != undefined) {
    let a_date = sdatelst.split(",");
    a_date.map((date) => {
      let year = date.substring(0, 4);
      if (Object.keys(placeyears).includes(year)) {
        let cnt = placeyears[year]["cnt"] + 1;
        placeyears[year] = { cnt: cnt, map: map };
      } else {
        placeyears[year] = { cnt: 1, map: map };
      }
    });
  }
});
// console.info(placeyears);

// for (var key in placeyears) {
//   console.log(key);
//   console.log(placeyears[key]["map"]);
// }

// Object.keys(placeyears).map((y) => {
//   console.log(y);
// });

let calendar = {};

tracks.map((track) => {
  let sdatelst = track["date"];
  if (sdatelst != undefined) {
    let a_date = sdatelst.split(",");
    a_date.map((date) => {
      let sdate = date.substring(0, 8);
      if (!Object.keys(calendar).includes(sdate) && sdate.length === 8) {
        calendar[sdate] = {
          date: sdate,
          map: track["map"],
          cover: track["cover"],
        };
      }
    });
  }
});

let calendarM = {};

Object.keys(calendar).map((day) => {
  let m = day.substring(0, 6);
  if (!Object.keys(calendarM).includes(m)) {
    calendarM[m] = [calendar[day]];
  } else {
    calendarM[m].push(calendar[day]);
  }
});

let mDesc = [];

Object.keys(calendarM)
  .sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  })
  .map((day) => {
    mDesc.push(day);
  });

// mDesc.map((d) => {
//   console.log(d);
// });

// let idxDay = new Date(2020, 10, 8).getDay();
// console.log(idxDay);
// idxDay = new Date(2020, 10, 1).getDay();
// console.log(idxDay);

function getNumberOfDays(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
}

function getDateStr(date) {
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }
  return date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate());
}

const sdatelst = "20230222,20230304";
let a_date = sdatelst.split(",");
let cntday = 1;
const date1 = a_date[0];
const dd1 = new Date(
  date1.substring(0, 4),
  Number(date1.substring(4, 6)) - 1,
  Number(date1.substring(6, 8)),
  0,
  0,
  0
);

if (a_date.length > 1) {
  const date2 = a_date[1];
  if (date2.length === 8) {
    const dd2 = new Date(
      date2.substring(0, 4),
      Number(date2.substring(4, 6)) - 1,
      Number(date2.substring(6, 8)),
      0,
      0,
      0
    );
    cntday = getNumberOfDays(dd1, dd2);
  }
}

let i = 0;
let tmpDate = dd1;
let startTime = dd1.getTime();
tmpDate = new Date(startTime + i * 24 * 3600 * 1000);
while (i <= cntday) {
  tmpDate = new Date(startTime + i * 24 * 3600 * 1000);
  console.log(getDateStr(tmpDate));
  i++;
}
