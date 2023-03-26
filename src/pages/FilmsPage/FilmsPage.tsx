import React, { FC } from "react";
import Films from "../../components/Films/Films";
import Search from "../../components/Search/Search";
import { IFilmsPageProps } from "../../types";

const FilmsPage: FC<IFilmsPageProps> = ({
  handleSearch,
  handleDelete,
  handleNavigate,
  filteredFilms,
  handleSelectFilm,
}) => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Фильмы</h1>
      <Search handleSearch={handleSearch} />
      <Films
        handleDelete={handleDelete}
        handleSelectFilm={handleSelectFilm}
        films={filteredFilms}
      />
      <button onClick={handleNavigate}>Назад</button>
    </React.Fragment>
  );
};

export default FilmsPage;
