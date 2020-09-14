import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Operations
import { userLoginOut } from "../Operations/operationsAuth";

// Sprite SVG icons
import { Logo, LoginOut } from "../SVG/sprite";

// Constants
import { navigation } from "../../constants";

// Css
import "./Header.scss";
const Header = () => {
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <nav className="header-center">
        <div className="header__logo">
          <Logo />
          <NavLink to={navigation.main} exact className="nav__link">
            Finance
          </NavLink>
        </div>
        <ul className="header__menu">
          <li className="header__item">{session.user.name}</li>
          <li className="header__item separator"> | </li>
          <li className="header__item loginOut" onClick={() => dispatch(userLoginOut(session.token))} href="/login">
            <LoginOut scale="18" />
            <p className="header__link-text">Login out</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
