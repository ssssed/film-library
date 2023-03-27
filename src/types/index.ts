export type Genre =
  | "комедия"
  | "боевик"
  | "криминал"
  | "драмма"
  | "фантастика"
  | "мультфильм";

export type IComment = {
  id: number;
  message: string;
  time: Date;
  rating: number;
};

export interface IFilm {
  id: number;
  title: string;
  country: string;
  genre: Genre[];
  actors: string[];
  screenwriter: string | null; // сценарист
  producer: string[];
  operator: string | null;
  compositor: string;
  budget: number;
  collections: number; // cборы
  ageRating: "18+" | "16+" | "12+" | "6+" | "0+";
  duration: number;
  image: string;
  rating: number;
  dateRelease: Date;
  comments: IComment[];
}

export interface IForm {
  films: IFilm[];
  handleUpdateFilms: (films: IFilm[]) => void;
}

export interface IFilms {
  films: IFilm[];
  handleDelete: (id: number) => void;
  handleSelectFilm: (film: IFilm) => void;
}

export interface IFilmProps {
  film: IFilm;
  handleDelete: (id: number) => void;
  handleSelectFilm: (film: IFilm) => void;
}

export interface ISearchProps {
  handleSearch: (filtered: string) => void;
}

export interface IFilmsPageProps {
  handleSearch: (filtered: string) => void;
  handleDelete: (id: number) => void;
  filteredFilms: IFilm[];
  handleNavigate: () => void;
  handleSelectFilm: (film: IFilm) => void;
}

export interface IFilmPageProps {
  selectedFilm: IFilm;
  updateSelectedFilm: (film: IFilm) => void;
}

export interface ICreateCommentProps {
  selectedFilm: IFilm;
  addComments: (film: IFilm) => void;
}

export interface ICommentsProps {
  comments: IComment[];
}
