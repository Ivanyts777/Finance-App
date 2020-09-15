import React from "react";
import Balance from "../../Components/Balance/Balance";
import CarrencyExchange from "../../Components/CurrencyExchage/CurrencyExchage";
import styles from "./Main.module.css";
import { useSelector } from "react-redux";
import { Remove, Edit } from "../../Components/SVG/sprite";
import Menu from "../../Components/Menu/Menu";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const titles = ["Date", "Type", "Category", "Comment", "Sum", "Balance", "Edit"];

const Main = () => {
  const dataFinance = useSelector((state) => state.finance.data);

  return (
    <div className={styles.mainGlobal}>
      <div>
        <Menu />
        <Balance />
        <div className={styles.showTabletDesktop}>
          <CarrencyExchange />
        </div>
      </div>
      <div className={styles.Main}>
        <ul className={styles.list}>
          <li className={styles.item}>
            {titles.map((title) => (
              <p key={title} className={title === "Sum" || title === "Balance" || title === "Edit" ? styles.titleMoney : styles.title}>
                {title}
              </p>
            ))}
          </li>
          {dataFinance.length > 0 ? (
            dataFinance.map((el) => (
              <li className={styles.item} key={el.id}>
                <p className={styles.text}>
                  <span className={styles.titleMobile}>Date</span>
                  {el.transactionDate.slice(0, 10)}
                </p>
                <p className={styles.text}>
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
                <p className={el.balanceAfterSign === "-" ? styles.textOrange : styles.textBlue}>
                  <span className={styles.titleMobile}>Sum</span>
                  {el.amount.toFixed(2)}
                </p>
                <p className={styles.textMoney}>
                  <span className={styles.titleMobile}>Balance</span>
                  {el.balanceAfter.toFixed(2)}
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
            ))
          ) : (
            <p>Please add transaction</p>
          )}
        </ul>
        <div className={styles.bgIconAdd}></div>
        <div className={styles.iconAdd}>
          <Fab
            style={{
              backgroundColor: "#ff6c00",
              color: "#fff",
            }}
          >
            <AddIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default Main;
