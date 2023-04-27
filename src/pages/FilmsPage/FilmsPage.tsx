import React, { FC, useMemo, useState } from "react";
import Films from "../../components/Films/Films";
import Search from "../../components/Search/Search";
import { IFilmsPageProps } from "../../types";
import "./FilmsPage.scss";

const FilmsPage: FC<IFilmsPageProps> = ({
  handleSearch,
  handleDelete,
  filteredFilms,
  handleSelectFilm,
}) => {
  const [isSorted, setSorted] = useState<boolean>(false);
  const [sortedName, setSortedName] = useState<"rating" | "duration" | "id">(
    "rating"
  );
  const handleSortedFilms = (e: React.MouseEvent) => {
    setSorted(!isSorted);
    setSortedName(e.currentTarget.id as "rating" | "duration" | "id");
  };

  const sortedFilms = useMemo(() => {
    if (isSorted)
      return filteredFilms.sort((a, b) => b[sortedName] - a[sortedName]);
    return filteredFilms;
  }, [isSorted, filteredFilms, sortedName]);
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Фильмы</h1>
      <Search handleSearch={handleSearch} />
      <button id="rating" onClick={handleSortedFilms}>
        Отфильтровать по рейтингу
      </button>
      <button id="duration">Сортировать по длительности</button>
      <button id="id">Сортировать по новизне добавления на сайт</button>
      <Films
        handleDelete={handleDelete}
        handleSelectFilm={handleSelectFilm}
        films={sortedFilms}
      />
    </React.Fragment>
  );
};

export default FilmsPage;
