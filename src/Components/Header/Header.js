import React from "react";
import { NavLink } from "react-router-dom";

// Sprite SVG icons
import { Logo, LoginOut } from "../SVG/sprite";

// Constants
import { navigation } from "../../constants";

import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="header-center">
        <div className="header__logo">
          <Logo />
          <NavLink to={navigation.main} exact className="nav__link">
            Wallet
          </NavLink>
        </div>
        <ul className="header__menu">
          <li className="header__item">
            <a className="header__link" href="/">
              Name
            </a>
          </li>
          <li className="header__item separator"> | </li>
          <li className="header__item">
            <a className="header__link loginOut" href="/">
              <LoginOut scale="18" />
              <p className="header__link-text">Login out</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
