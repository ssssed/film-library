export type Genre =
  | 'комедия'
  | 'боевик'
  | 'криминал'
  | 'драмма'
  | 'фантастика'
  | 'мультфильм';

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
  ageRating: '18+' | '16+' | '12+' | '6+' | '0+';
  duration: number;
  image: string;
  rating: number;
  dateRelease: Date;
}

export interface IForm {
  films: IFilm[];
  handleUpdateFilms: (films: IFilm[]) => void;
}

export interface IFilms {
  films: IFilm[];
  handleDelete: (id: number) => void;
}

export interface IFilmProps {
  film: IFilm;
  handleDelete: (id: number) => void;
}

export interface ISearchProps {
  handleSearch: (filtered: string) => void;
}
