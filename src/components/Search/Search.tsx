import React, {FC, useState} from 'react';
import {ISearchProps} from "../../types";
import lupa from "../../assets/lupa.png";

import './Search.scss';

const Search: FC<ISearchProps> = ({handleSearch}) => {
  const [filter, setFilter] = useState<string>('');
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div className="search">
      <div className="search__container">
        <img src={lupa} alt='lupa' className="search__img"/>
        <input className="search__input" placeholder="Поиск" value={filter} onChange={handleFilterChange}/>
      </div>
    </div>
  );
};

export default Search;