import React from "react";

import { Home, TimeLine, Money } from "../SVG/sprite";
import { useSelector } from "react-redux";
import { navigation } from "../../constants";
import { NavLink } from "react-router-dom";

import exchangeStyles from "../CurrencyExchage/CurrencyExchage.module.css";
import "./Menu.scss";
const Menu = () => {
  const balance = useSelector((state) => state.finance.balance);
  const onExchange = () => {
    document.getElementById("exchange").classList.toggle(exchangeStyles.none);
  };
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
      <li className="menu__item">
        <span className="money-link">
          <NavLink to={navigation.currency} exact>
            <Money />
          </NavLink>
        </span>
        <span className="money-button" onClick={onExchange}>
          <Money />
          <p className="menu__text">Exchange</p>
        </span>
      </li>
      <li className="menu__item separator"> | </li>
      <li className="menu__item balance">
        Balance:
        <span className="balance-text"> {balance} UAH</span>
      </li>
    </ul>
  );
};

export default Menu;
