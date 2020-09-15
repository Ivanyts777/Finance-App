import React from "react";
import Balance from "../../Components/Balance/Balance";
import CarrencyExchange from "../../Components/CurrencyExchage/CurrencyExchage";
import styles from "./Main.module.css";
import { useSelector } from "react-redux";
import { Remove, Edit } from "../../Components/SVG/sprite";
import Menu from "../../Components/Menu/Menu";

const titles = [
  "Date",
  "Type",
  "Category",
  "Comment",
  "Sum",
  "Balance",
  "Edit",
];

const Main = () => {
  const dataFinance = useSelector((state) => state.finance.data);

  return (
    <div className={styles.mainGlobal}>
      <div>
        <Menu />
        <Balance />
        <div className={styles.showTabletDesktop}>
          <CarrencyExchange />
          <div className={styles.bgCarrenceEx}></div>
        </div>
      </div>
      <div className={styles.Main}>
        <div className={styles.titleContainer}>
          {titles.map((title) => (
            <p key={title} className={styles.title}>
              {title}
            </p>
          ))}
        </div>
        <ul className={styles.list} id="style-3">
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
              <p title={el.comment} className={styles.text}>
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
    </div>
  );
};

export default Main;
