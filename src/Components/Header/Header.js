import React from "react";
import { Logo, LoginOut, Home, TimeLine, Money } from "../SVG/sprite";

import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="header-center">
        <div className="header__logo">
          <Logo />
          Wallet
        </div>
        <ul className="header__menu">
          <li className="header__item">
            <a className="header__link" href="/">
              Name
            </a>
          </li>
          <li className="header__item separator"> | </li>
          <li className="header__item">
            <a className="header__link" href="/">
              <LoginOut />
            </a>
          </li>
        </ul>
      </nav>
      <ul className="header__mobile-submenu">
        <li className="header__mobile-submenu-item">
          <Home />
        </li>
        <li className="header__mobile-submenu-item">
          <TimeLine />
        </li>
        <li className="header__mobile-submenu-item">
          <Money />
        </li>
      </ul>
    </header>
  );
};

export default Header;
