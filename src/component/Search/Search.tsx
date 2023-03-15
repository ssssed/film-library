import React, {FC, useState} from 'react';
import {ISearchProps} from "../../types";
import './Search.scss';
const Search: FC<ISearchProps> = ({ handleSearch }) => {
  const [filter, setFilter] = useState<string>('');
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div className="search">
      <input className="search__input" placeholder="Название" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Search;