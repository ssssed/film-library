import React, {FC} from 'react';
import {IFilms} from "../../types";
import './Films.scss';
import Film from "../FIlm/Film";

const Films: FC<IFilms> = ({films, handleDelete}) => {
  return (
    <div className="films">
      {
        films.map((film) => <Film key={film.id} film={film} handleDelete={handleDelete}/>)
      }
    </div>
  );
};

export default Films;