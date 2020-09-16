import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Menu from "../Menu/Menu";
import styles from "./CurrencyExchage.module.css";

const CurrencyExchage = () => {
  const [currency, setCurrency] = useState([]);

  const windowSize = useSelector((state) => state.global.windowSize);

  useEffect(() => {
    axios
      .get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then(({ data }) => setCurrency(data));
  }, []);
  const offExchange = () => {
    if (windowSize >= 748 && windowSize <= 1191) {
      document.getElementById("exchange").classList.add(styles.none);
    }
  };
  return (
    <>
      <div className={styles.menuMobile}>
        <Menu />
      </div>
      <div
        className={
          styles.currency__exchage_background +
          ` ${windowSize >= 748 && windowSize <= 1191 ? styles.none : ""}`
        }
        id="exchange"
        onClick={offExchange}
      >
        <ul className={styles.currency__exchage_list}>
          <li className={styles.currency__exchage_title}>
            <p className={styles.currency__exchage_name}>Currency</p>
            <p className={styles.currency__exchage_name}>Purshase</p>
            <p className={styles.currency__exchage_name}>Sale</p>
          </li>
          {currency.map((el) => (
            <li key={el.ccy} className={styles.currency__exchage_money}>
              <p>{el.ccy}</p>
              <p>{Number(el.buy).toFixed(2)}</p>
              <p>{Number(el.sale).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CurrencyExchage;
