import React, { FC } from "react";
import "./Film.scss";
import { IFilmProps } from "../../types";
import { useNavigate } from "react-router-dom";

const Film: FC<IFilmProps> = (props) => {
  const { film, handleDelete, handleSelectFilm } = props;
  const { id, title, image, duration, genre, ageRating, producer } = film;
  const navigate = useNavigate();

  const handleSelectCurrentFilm = () => {
    handleSelectFilm(film);
    navigate("/film");
  };
  const handleDeleteCurrentFilm = () => handleDelete(id);
  return (
    <div className="film" onClick={handleSelectCurrentFilm}>
      <button className="film__delete" onClick={handleDeleteCurrentFilm}>
        x
      </button>
      <img className="film__img" src={image} alt={title} />
      <div className="film__container">
        <h4 className="film__title">Название: {title}</h4>
        <h4 className="film__title">Жанр: {genre.join(",")}</h4>
        <h4 className="film__title">Возрастной рейтинг: {ageRating}</h4>
        <h4 className="film__title">Продюсер: {producer}</h4>
        <h4 className="film__title">Длительность: {duration}</h4>
      </div>
    </div>
  );
};

export default Film;
