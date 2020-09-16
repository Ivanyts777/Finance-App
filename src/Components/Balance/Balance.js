import React from "react";
import styles from "./Balance.module.css";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Balance = () => {
  const balance = useSelector((state) => state.finance.balance);

  return (
    <div className={styles.balance}>
      <p className={styles.balance__title}>Balance:</p>
      <p className={styles.balance__value}>{balance} UAH</p>
    </div>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Balance;
