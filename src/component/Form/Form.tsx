import React, {FC, useState} from 'react';
import './Form.scss';
import {IForm} from "../../types";

const Form: FC<IForm> = ({films, handleUpdateFilms}) => {
  // Инициализация переменных
  const [title, setTitle] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [director, setDirector] = useState<string>('');
  const [screenwriter, setScreenwriter] = useState<string>('');
  const [producer, setProducer] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [compositor, setCompositor] = useState<string>('');
  const [budget, setBudget] = useState<number>(0);
  const [collections, setCollections] = useState<number>(0);
  const [ageRating, setAgeRating] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [dateRelease, setDateRelease] = useState<Date>(new Date());
  const [poster, setPoster] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value);
  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => setGenre(e.target.value);
  const handleDirectorChange = (e: React.ChangeEvent<HTMLInputElement>) => setDirector(e.target.value);
  const handleScreenwriterChange = (e: React.ChangeEvent<HTMLInputElement>) => setScreenwriter(e.target.value);
  const handleProducerChange = (e: React.ChangeEvent<HTMLInputElement>) => setProducer(e.target.value);
  const handleOperatorChange = (e: React.ChangeEvent<HTMLInputElement>) => setOperator(e.target.value);
  const handleCompositorChange = (e: React.ChangeEvent<HTMLInputElement>) => setCompositor(e.target.value);
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => setBudget(+e.target.value);
  const handleCollectionsChange = (e: React.ChangeEvent<HTMLInputElement>) => setCollections(+e.target.value);
  const handleAgeRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => setAgeRating(+e.target.value);
  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => setDuration(+e.target.value);
  const handlePosterChange = (e: React.ChangeEvent<HTMLInputElement>) => setPoster(e.target.value);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateFilms([...films, {
      id: new Date().getTime(),
      title, country, genre, director,
      screenwriter, producer, operator,
      compositor, budget, collections,
      ageRating, duration, poster
    }])
  }

  const handleValidateText = (text: string) => {
  }

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <input className="form__input" placeholder="Название" value={title} onChange={handleTitleChange} required={true}
      />
      <input className="form__input" placeholder="Страна" value={country} onChange={handleCountryChange}
             required={true}/>
      <input className="form__input" placeholder="Жанр" value={genre} onChange={handleGenreChange} required={true}/>
      <input className="form__input" placeholder="Режисер" value={director} onChange={handleDirectorChange}
             required={true}/>
      <input className="form__input" placeholder="Сценарист" value={screenwriter} onChange={handleScreenwriterChange}
             required={true}/>
      <input className="form__input" placeholder="Продюссер" value={producer} onChange={handleProducerChange}
             required={true}/>
      <input className="form__input" placeholder="Оператор" value={operator} onChange={handleOperatorChange}
             required={true}/>
      <input className="form__input" placeholder="Композитор" value={compositor} onChange={handleCompositorChange}
             required={true}/>
      <input className="form__input" placeholder="Бюджет" value={budget} onChange={handleBudgetChange} required={true}/>
      <input className="form__input" placeholder="Сборы" value={collections} onChange={handleCollectionsChange}
             required={true}/>
      <input className="form__input" placeholder="Возрастной рейтинг" value={ageRating}
             onChange={handleAgeRatingChange} required={true}/>
      <input className="form__input" placeholder="Длительность" value={duration} onChange={handleDurationChange}
             required={true}/>
      <input className="form__input" type="date" placeholder="Дата выхода" required={true}/>
      <input className="form__input" placeholder="Постер" value={poster} onChange={handlePosterChange} required={true}/>
      <button type="submit">добавить фильм</button>
    </form>
  );
};

export default Form;