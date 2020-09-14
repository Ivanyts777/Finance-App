import React from "react";
import styles from "./Balance.module.css";
import { connect } from "react-redux";

const Balance = () => {
  return (
    <div className={styles.balance}>
      <p className={styles.balance__title}>Баланс</p>
      <p className={styles.balance__value}>24 000.00 грн</p>
    </div>
  );
};
const mapStateToProps = (store) => {};
console.log(mapStateToProps);
export default connect()(Balance);
