import React, {FC, useState} from 'react';
import './Form.scss';
import {Genre, IForm} from "../../types";
import {useValidate} from "../../hook/useValidate";
import {useNavigate} from "react-router-dom";

const Form: FC<IForm> = ({films, handleUpdateFilms}) => {
  // Навигация
  const navigate = useNavigate();
  // Инициализация переменных
  const [title, setTitle] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [genre, setGenre] = useState<Genre[]>([]);
  const [actors, setActors] = useState<string>('');
  const [screenwriter, setScreenwriter] = useState<string>('');
  const [producer, setProducer] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [compositor, setCompositor] = useState<string>('');
  const [budget, setBudget] = useState<number>(0);
  const [collections, setCollections] = useState<number>(0);
  const [ageRating, setAgeRating] = useState<'18+' | '16+' | '12+' | '0+'>('0+');
  const [duration, setDuration] = useState<number>(0);
  const [dateRelease, setDateRelease] = useState<Date>(new Date());
  const [rating, setRating] = useState<number>(0);
  const [image, setImage] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = useValidate(e.target.value);
    if (isValid) setTitle(e.target.value);
  };
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = useValidate(e.target.value);
    if (isValid) setCountry(e.target.value);
  }
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => setGenre(Array.from(e.target.selectedOptions, (option) => option.value as Genre));
  const handleActorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = useValidate(e.target.value, {isList: true});
    if (isValid) setActors(e.target.value);
  }
  const handleScreenwriterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = useValidate(e.target.value);
    if (isValid) setScreenwriter(e.target.value);
  }
  const handleProducerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = useValidate(e.target.value, {isList: true});
    if (isValid) setProducer(e.target.value);
  }
  const handleOperatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = useValidate(e.target.value);
    if (isValid) setOperator(e.target.value);
  }
  const handleCompositorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = useValidate(e.target.value);
    if (isValid) setCompositor(e.target.value);
  }
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = useValidate(e.target.value, {isNumber: true});
    if (isValid) setBudget(+e.target.value);
  }
  const handleCollectionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = useValidate(e.target.value, {isNumber: true});
    if (isValid) setCollections(+e.target.value);
  }
  const handleAgeRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => setAgeRating(e.target.value as '18+' | '16+' | '12+' | '0+');
  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = useValidate(e.target.value, {isNumber: true});
    if (isValid) setDuration(+e.target.value);
  }
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  }
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = useValidate(e.target.value, {isNumber: true});
    if (isValid) setRating(+e.target.value);
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDateRelease(new Date(e.target.value));

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateFilms([...films, {
      id: new Date().getTime(),
      title,
      country,
      genre: genre,
      actors: actors.split(","),
      screenwriter,
      producer: producer.split(","),
      operator,
      compositor,
      budget,
      collections,
      ageRating,
      duration,
      image,
      rating,
      dateRelease,
    }])
    navigate("/films");
  }

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <h1 style={{textAlign: 'center'}}>Добавить фильм</h1>
      <input className="form__input" placeholder="Название" value={title} onChange={handleTitleChange} required={true}
      />
      <input className="form__input" placeholder="Страна" value={country} onChange={handleCountryChange}
             required={true}/>
      <select className="form__input" placeholder="Жанр" value={genre} onChange={handleGenreChange} required multiple>
        <option value='комедия'>комедия</option>
        <option value='боевик'>боевик</option>
        <option value='криминал'>криминал</option>
        <option value='драмма'>драмма</option>
        <option value='фантастика'>фантастика</option>
        <option value='мультфильм'>мультфильм</option>
      </select>
      <input className="form__input" placeholder="Актеры" value={actors} onChange={handleActorsChange}
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
      <input className="form__input" placeholder="Рейтинг" value={rating} onChange={handleRatingChange}
             required={true}/>
      <input className="form__input" placeholder="Сборы" value={collections} onChange={handleCollectionsChange}
             required={true}/>
      <select
        className="form__input"
        placeholder="Возрастной рейтинг"
        value={ageRating}
        onChange={handleAgeRatingChange}
        required
      >
        <option value="18+">18+</option>
        <option value='16+'>16+</option>
        <option value='12+'>12+</option>
        <option value='12+'>6+</option>
        <option value='0+'>0+</option>
      </select>
      <input className="form__input" placeholder="Длительность" value={duration} onChange={handleDurationChange}
             required={true}/>
      <input className="form__input" type="date" placeholder="Дата выхода" onChange={handleDateChange} required={true}/>
      <input className="form__input" placeholder="Постер" value={image} onChange={handleImageChange} required={true}/>
      <button type="submit">добавить фильм</button>
    </form>
  );
};

export default Form;