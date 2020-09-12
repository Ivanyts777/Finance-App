import React, { useEffect } from "react";

import { Home, TimeLine, Money } from "../SVG/sprite";
import { Loader } from "../../redux/Actions";

import "./Menu.scss";
import { useDispatch } from "react-redux";
const Menu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Loader(true));
    dispatch(Loader(false));
  }, [dispatch]);
  return (
    <ul className="menu">
      <li className="menu__item active">
        <Home />
        <p className="menu__text">Main</p>
      </li>
      <li className="menu__item separator"> | </li>

      <li className="menu__item">
        <TimeLine />
        <p className="menu__text">Statistic</p>
      </li>
      <li className="menu__item separator"> | </li>
      <li className="menu__item money">
        <Money />
      </li>
      <li className="menu__item balance">
        Balance:
        <span> 25 000.00 UAH</span>
      </li>
    </ul>
  );
};

export default Menu;
