import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <nav className="header__nav">
        <Link to="/" className="header__nav-link">
          Главная
        </Link>
        <Link to="/films" className="header__nav-link">
          Мои Фильмы
        </Link>
        <Link to="/form" className="header__nav-link">
          Добавление нового фильма
        </Link>
      </nav>
    </header>
  );
};

export default Header;
