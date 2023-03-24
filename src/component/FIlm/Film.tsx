import React, {FC} from 'react';
import './Film.scss';
import {IFilmProps} from "../../types";

const Film: FC<IFilmProps> = (props) => {
  const {
    film,
    handleDelete
  } = props;
  const {
    id,
    title,
    image,
    duration,
    genre,
    ageRating,
    producer
  } = film;
  return (
    <div className='film'>
      <button
        className='film__delete'
        onClick={() => handleDelete(id)}
      >
        x
      </button>
      <img
        className='film__img'
        src={image}
        alt={title}
      />
      <h4 className='film__title'>Название: {title}</h4>
      <h4 className='film__title'>Жанр: {genre.join(',')}</h4>
      <h4 className='film__title'>Возрастной рейтинг: {ageRating}</h4>
      <h4 className='film__title'>Продюсер: {producer}</h4>
      <h4 className='film__title'>Длительность: {duration}</h4>
    </div>
  );
};

export default Film;