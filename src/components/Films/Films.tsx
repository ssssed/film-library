import React, { FC } from "react";
import { IFilms } from "../../types";
import "./Films.scss";
import Film from "../FIlm/Film";

const Films: FC<IFilms> = ({ films, handleDelete, handleSelectFilm }) => {
  return (
    <div className="films">
      {films.map((film) => (
        <Film
          key={film.id}
          film={film}
          handleSelectFilm={handleSelectFilm}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Films;
