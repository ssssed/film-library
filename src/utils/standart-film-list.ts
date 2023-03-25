import {Genre, IFilm} from "../types";

export const defaultFilms: IFilm[] = [
  {
    id: 1,
    title: "Звездные войны: Эпизод 1 - Скрытая угроза",
    country: "США",
    genre: ["фантастика", "боевик"],
    actors: ["Лиам Нисон", "Юэн Макгрегор", "Натали Портман"],
    screenwriter: null, // сценарист
    producer: ["Джордж Лукас"],
    operator: null,
    compositor: "Джон Уильямс",
    budget: 11500000,
    collections: 431088295, // cборы
    ageRating: '6+',
    duration: 136,
    image: "https://sun9-41.userapi.com/impg/QY2YU8zzPgiop50KF8bMbfV_mH_DrSylhZBeCA/1_6TJEQkbHw.jpg?size=300x450&quality=96&sign=202985ef1387b7004687cbff57c1ea05&type=album",
    rating: 7.9,
    dateRelease: new Date(1999, 7, 29),
  },
  {
    id: 2,
    title: "Звездные войны: Эпизод 2 - Аттака клонов",
    country: "США",
    genre: ["фантастика", "боевик"],
    actors: ["Лиам Нисон", "Юэн Макгрегор", "Натали Портман"],
    screenwriter: null, // сценарист
    producer: ["Джордж Лукас"],
    operator: null,
    compositor: "Джон Уильямс",
    budget: 11500000,
    collections: 302191252, // cборы
    ageRating: '12+',
    duration: 142,
    image: "https://sun7-19.userapi.com/impg/0ABQ3nt3153m2tVqrYmY0EwFzbU4kzMqNw_bqg/bavf1B2DEVc.jpg?size=300x450&quality=96&sign=a39c265f7de0ab7457e6560ba94ba201&type=album",
    rating: 8,
    dateRelease: new Date(2002, 5, 15),
  }
]