import React, {useEffect, useState} from 'react'
import Form from "./Form/Form";
import {Genre, IFilm} from "../types";
import Films from "./Films/Films";
import Search from "./Search/Search";
import {defaultFilms} from "../utils/standart-film-list";
import {Route, Routes, useNavigate} from "react-router-dom";

const App: React.FC = () => {
  // Навигация
  const navigate = useNavigate();
  // Инициализирую глобальную переменную с фильмами
  const [films, setFilms] = useState<IFilm[]>(defaultFilms);
  const [filteredFilms, setFilteredFilms] = useState<IFilm[]>(films);
  const [searchFilter, setSearchFilter] = useState<string>("any");

  const handleFilmsChange = (films: IFilm[]) => setFilms(films);
  const handleSearch = (search: string) => {
    const filtered = films.filter((film) =>
      film.title.includes(search) ||
      film.compositor.includes(search) ||
      film.producer.includes(search) ||
      film.genre.includes(search as Genre) ||
      film.ageRating.includes(search)
    );
    setFilteredFilms(filtered);
  }
  const handleDelete = (id: number) => {
    const isConfirm = confirm("Подтверждаете удаление?");
    if (isConfirm) {
      const updatedFilms = films.filter((film) => film.id !== id);
      setFilms(updatedFilms);
    }
  }

  const handleNavigate = () => navigate('/');

  useEffect(() => {
    setFilteredFilms(films);
    setSearchFilter("");
  }, [films])
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={
          <Form films={films} handleUpdateFilms={handleFilmsChange}/>}/>
        <Route path="/films" element={
          <React.Fragment>
            <h1 style={{textAlign: "center"}} >Фильмы</h1>
            <Search handleSearch={handleSearch}/>
            <Films handleDelete={handleDelete} films={filteredFilms}/>
            <button onClick={handleNavigate}>Назад</button>
          </React.Fragment>}/>
      </Routes>
    </div>
  )
}

export default App
