import React, { FC, useMemo, useState } from "react";
import Films from "../../components/Films/Films";
import Search from "../../components/Search/Search";
import { IFilmsPageProps } from "../../types";

const FilmsPage: FC<IFilmsPageProps> = ({
  handleSearch,
  handleDelete,
  filteredFilms,
  handleSelectFilm,
}) => {
  const [isSorted, setSorted] = useState<boolean>(false);
  const handleSortedFilms = () => setSorted(!isSorted);

  const sortedFilms = useMemo(() => {
    if (isSorted) return filteredFilms.sort((a, b) => b.rating - a.rating);
    return filteredFilms;
  }, [isSorted, filteredFilms]);
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Фильмы</h1>
      <Search handleSearch={handleSearch} />
      <button onClick={handleSortedFilms}>Отфильтровать по рейтингу</button>
      <Films
        handleDelete={handleDelete}
        handleSelectFilm={handleSelectFilm}
        films={sortedFilms}
      />
    </React.Fragment>
  );
};

export default FilmsPage;
