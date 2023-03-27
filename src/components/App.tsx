import React, { useEffect, useState } from "react";
import Form from "./Form/Form";
import { Genre, IFilm } from "../types";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hook/useLocalStorage";
import FilmPage from "../pages/FilmPage/FilmPage";
import FilmsPage from "../pages/FilmsPage/FilmsPage";
import "./App.scss";
import Header from "./Header/Header";
import { useSessionStorage } from "../hook/useSessionStorage";

const App: React.FC = () => {
  // Навигация
  const navigate = useNavigate();
  // Инициализирую глобальную переменную с фильмами
  const [localStorage, setLocalStorage] = useLocalStorage("films");
  const [sessionStorage, setSessionStorage] =
    useSessionStorage("selected-film");
  const [films, setFilms] = useState<IFilm[]>(localStorage);
  const [filteredFilms, setFilteredFilms] = useState<IFilm[]>(films);
  const [searchFilter, setSearchFilter] = useState<string>("any");

  const handleFilmsChange = (films: IFilm[]) => {
    setFilms(films);
    setLocalStorage(films);
  };
  const handleSearch = (search: string) => {
    const filtered = films.filter(
      (film) =>
        film.title.toLowerCase().includes(search.toLowerCase()) ||
        film.compositor.toLowerCase().includes(search.toLowerCase()) ||
        film.producer.toLocaleString().includes(search.toLowerCase()) ||
        film.genre.includes(search as Genre) ||
        film.ageRating.includes(search)
    );
    setFilteredFilms(filtered);
  };
  const handleDelete = (id: number) => {
    const isConfirm = confirm("Подтверждаете удаление?");
    if (isConfirm) {
      const updatedFilms = films.filter((film) => film.id !== id);
      setFilms(updatedFilms);
      setLocalStorage(updatedFilms);
    }
  };

  const [selectedFilm, setSelectedFilm] = useState<IFilm>(sessionStorage);

  const handleSelectFilm = (selectedFilm: IFilm) => {
    setSelectedFilm(selectedFilm);
    setSessionStorage(selectedFilm);
    console.log(selectedFilm);
  };

  const handleNavigate = () => navigate("/");

  const updateSelectedFilm = (film: IFilm) => {
    setSelectedFilm(film);
    const findedFilm: IFilm = localStorage.find(
      (el: IFilm) => el.id === film.id
    );
    if (findedFilm) {
      findedFilm.comments = [...film.comments];
      setLocalStorage(localStorage);
    }
  };

  useEffect(() => {
    setFilteredFilms(films);
    setSearchFilter("");
  }, [films]);
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<div>Main page</div>} />
        <Route
          path="/form"
          element={<Form films={films} handleUpdateFilms={handleFilmsChange} />}
        />
        <Route
          path="/films"
          element={
            <FilmsPage
              handleSearch={handleSearch}
              handleDelete={handleDelete}
              handleNavigate={handleNavigate}
              filteredFilms={filteredFilms}
              handleSelectFilm={handleSelectFilm}
            />
          }
        />
        <Route
          path="/film"
          element={
            <FilmPage
              updateSelectedFilm={updateSelectedFilm}
              selectedFilm={selectedFilm}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
