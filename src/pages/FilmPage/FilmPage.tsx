import React, { FC } from "react";
import CreateComment from "../../components/CreateComment/CreateComment";
import { IFilm, IFilmPageProps } from "../../types";
import "./FilmPage.scss";

const FilmPage: FC<IFilmPageProps> = ({ selectedFilm, updateSelectedFilm }) => {
  const addComments = (film: IFilm) => {
    updateSelectedFilm(film);
  };
  return (
    <React.Fragment>
      <div className="film-page">
        <img src={selectedFilm.image} alt={selectedFilm.title} />
        <div className="content">
          <p className="content__text">Название: {selectedFilm.title}</p>
          <p className="content__text">Страна: {selectedFilm.country}</p>
          <p className="content__text">
            Жанры: {selectedFilm.genre.join(", ")}
          </p>
          <p className="content__text">
            Актеры: {selectedFilm.actors.join(", ")}
          </p>
          <p className="content__text">Оператор: {selectedFilm.operator}</p>
          <p className="content__text">Продюссер: {selectedFilm.producer}</p>
          <p className="content__text">Композитор: {selectedFilm.compositor}</p>
          <p className="content__text">
            Сценарист: {selectedFilm.screenwriter}
          </p>
          <p className="content__text">Бюджет: {selectedFilm.budget}</p>
          <p className="content__text">Сборы: {selectedFilm.collections}</p>
          <p className="content__text">
            Возрастной рейтинг: {selectedFilm.ageRating}
          </p>
          <p className="content__text">Рейтинг: {selectedFilm.rating}</p>
          <p className="content__text">
            Длительность: {selectedFilm.duration} мин
          </p>
          <p className="content__text">
            Дата выхода: {selectedFilm.dateRelease}
          </p>
        </div>
      </div>
      <h2>Комментарии</h2>
      <div className="comments">
        {selectedFilm.comments.map((comment) => (
          <div key={comment.id}>{comment.message}</div>
        ))}
      </div>
      <CreateComment selectedFilm={selectedFilm} addComments={addComments} />
    </React.Fragment>
  );
};

export default FilmPage;
