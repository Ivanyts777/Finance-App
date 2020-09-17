import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { modalLoginOut } from "../../redux/Slice";
import ModalLogOut from "../ModalLogOut/ModalLogOut";


// Sprite SVG icons
import { Logo, LoginOut } from "../SVG/sprite";

// Constants
import { navigation } from "../../constants";

// Css
import "./Header.scss";
const Header = () => {
  const session = useSelector((state) => state.session);
  const isModalLoginOut = useSelector((state) => state.global.isModalLoginOut);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(modalLoginOut(true));
  };

  return (
    <header className="header">
      {isModalLoginOut && <ModalLogOut />}
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
          <li className="header__item loginOut" onClick={openModal} href="/login">
            <LoginOut scale="18" />
            <p className="header__link-text">Login out</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
