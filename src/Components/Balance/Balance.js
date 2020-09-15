import React from "react";
import styles from "./Balance.module.css";
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => state.finance.balance);

  return (
    <div className={styles.balance}>
      <p className={styles.balance__title}>Баланс</p>
      <p className={styles.balance__value}>{balance} UAH</p>
    </div>
  );
};

export default Balance;
