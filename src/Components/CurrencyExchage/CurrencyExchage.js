import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import styles from "./CurrencyExchage.module.css";

const CurrencyExchage = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then(({ data }) => setCurrency(data));
  }, []);

  return (
    <>
      <div className={styles.menuMobile}>
        <Menu />
      </div>
      <div className={styles.currency__exchage_background}>
        <ul className={styles.currency__exchage_list}>
          <li className={styles.currency__exchage_title}>
            <p className={styles.currency__exchage_name}>Валюта</p>
            <p className={styles.currency__exchage_name}>Продажа</p>
            <p className={styles.currency__exchage_name}>Купівля</p>
          </li>
          {currency.map((el) => (
            <li key={el.ccy} className={styles.currency__exchage_money}>
              <p>{el.ccy}</p>
              <p>{Number(el.sale).toFixed(2)}</p>
              <p>{Number(el.buy).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CurrencyExchage;
