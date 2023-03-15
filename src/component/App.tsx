import React, {useEffect, useState} from 'react'
import Form from "./Form/Form";
import {IFilm} from "../types";
import Films from "./Films/Films";
import Search from "./Search/Search";

const App: React.FC = () => {
  // Инициализирую глобальную переменную с фильмами
  const [films, setFilms] = useState<IFilm[]>([]);
  const [filteredFilms, setFilteredFilms] = useState<IFilm[]>(films);
  const [searchFilter, setSearchFilter] = useState<string>("any");

  const handleFilmsChange = (films: IFilm[]) => setFilms(films);
  const handleSearch = (search: string) => {
    const filtered = films.filter((film) => film.title.includes(search));
    setFilteredFilms(filtered);
  }
  const handleDelete = (id: number) => {
    const updatedFilms = films.filter((film) => film.id !== id);
    setFilms(updatedFilms);
  }

  useEffect(() => {
    setFilteredFilms(films);
    setSearchFilter("");
  }, [films])
  return (
    <div className="page">
      <Form films={films} handleUpdateFilms={handleFilmsChange} />
      <Search handleSearch={handleSearch} />
      <Films handleDelete={handleDelete} films={filteredFilms} />
    </div>
  )
}

export default App