import React from "react";
import styles from "./Main.module.css";
import { useSelector } from "react-redux";
import { Remove, Edit } from "../../Components/SVG/sprite";

const Main = () => {
  const dataFinance = useSelector((state) => state.finance.data);

  return (
    <div className={styles.Main}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Date</p>
        <p className={styles.title}>Type</p>
        <p className={styles.title}>Category</p>
        <p className={styles.title}>Comment</p>
        <p className={styles.title}>Sum</p>
        <p className={styles.title}>Balance</p>
        <p className={styles.title}>Edit</p>
      </div>
      <ul className={styles.list}>
        {dataFinance.map((el) => (
          <li className={styles.item} key={el.id}>
            <p className={styles.text}>
              <span className={styles.titleMobile}>Date</span>
              {el.transactionDate.slice(0, 10)}
            </p>
            <p className={styles.textType}>
              <span className={styles.titleMobile}>Type</span>
              {el.balanceAfterSign}
            </p>
            <p className={styles.text}>
              <span className={styles.titleMobile}>Category</span>
              {el.category}
            </p>
            <p className={styles.text}>
              <span className={styles.titleMobile}>Comment</span>
              {el.comment}
            </p>
            <p
              className={
                el.balanceAfterSign === "-"
                  ? styles.textOrange
                  : styles.textBlue
              }
            >
              <span className={styles.titleMobile}>Sum</span>
              {el.amount}
            </p>
            <p className={styles.text}>
              <span className={styles.titleMobile}>Balance</span>
              {el.balanceAfter}
            </p>
            <div className={styles.text}>
              <span className={styles.titleMobile}>Edit</span>
              <div className={styles.buttonsMobile}>
                <button className={styles.button}>
                  <Edit scale="18" />
                </button>
                <button className={styles.button}>
                  <Remove scale="18" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
