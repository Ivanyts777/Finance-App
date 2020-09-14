import React, { useEffect } from "react";

import { Home, TimeLine, Money } from "../SVG/sprite";
import { Loader } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { navigation } from "../../constants";
import { NavLink } from "react-router-dom";

import "./Menu.scss";
const Menu = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.finance.balance);
  useEffect(() => {
    dispatch(Loader(true));

    dispatch(Loader(false));
  }, [dispatch]);
  return (
    <ul className="menu">
      <li className="menu__item">
        <NavLink to={navigation.main} exact>
          <Home />
          <p className="menu__text">Main</p>
        </NavLink>
      </li>
      <li className="menu__item separator"> | </li>

      <li className="menu__item">
        <NavLink to={navigation.diagram} exact>
          <TimeLine />
          <p className="menu__text">Statistic</p>
        </NavLink>
      </li>
      <li className="menu__item separator"> | </li>
      <li className="menu__item money">
        <NavLink to={navigation.currency} exact>
          <Money />
        </NavLink>
      </li>
      <li className="menu__item balance">
        Balance:
        <span> {balance} UAH</span>
      </li>
    </ul>
  );
};

export default Menu;
