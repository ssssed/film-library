export interface IFilm {
  id: number;
  title: string;
  country: string;
  genre: string;
  director: string;
  screenwriter: string;
  producer: string;
  operator: string;
  compositor: string;
  budget: number;
  collections: number;
  ageRating: number;
  duration: number;
  poster: string;
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