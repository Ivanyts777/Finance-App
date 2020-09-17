import React from "react";
import Balance from "../../Components/Balance/Balance";
import CarrencyExchange from "../../Components/CurrencyExchage/CurrencyExchage";
import styles from "./Main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Remove, Edit } from "../../Components/SVG/sprite";
import Menu from "../../Components/Menu/Menu";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { modalAdd, modalEdit } from "../../redux/Slice";
import AddTransaction from "../../Components/AddTransaction/AddTransaction";
import ChangeTransaction from "../../Components/ChangeTransaction/ChangeTransaction";
import ModalDellAdd from "../../Components/ModalDellAdd/ModalDellAdd";
import { modalDel } from "../../redux/Slice";

const titles = ["Date", "Category", "Comment", "Type", "Sum", "Balance", "Edit"];

const Main = () => {
  const dataFinance = useSelector((state) => state.finance.data);

  const { isModalAddTransactionOpen, isModalEditTransactionOpen } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  // const openModalEdit = () => {
  //   dispatch(modalEdit(true));
  // };
  const openModalAdd = () => {
    dispatch(modalAdd(true));
  };

  return (
    <div className={styles.mainGlobal}>
      {isModalEditTransactionOpen && <ChangeTransaction />}
      {isModalDelTransaction && <ModalDellAdd />}
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
              <p key={title} className={title === "Sum" || title === "Balance" || title === "Edit" || title === "Type" ? styles.titleMoney : styles.title}>
                {title}
              </p>
            ))}
          </li>
          {dataFinance.length > 0 ? (
            dataFinance
              .map((el) => (
                <li className={styles.item} key={el._id}>
                  <p className={styles.text}>
                    <span className={styles.titleMobile}>Date</span>
                    {el.transactionDate.slice(0, 10)}
                  </p>
                  <p className={styles.text}>
                    <span className={styles.titleMobile}>Category</span>
                    {el.category}
                  </p>
                  <p title={el.comment} className={styles.text}>
                    <span className={styles.titleMobile}>Comment</span>
                    {el.comment ? el.comment : "No comment"}
                  </p>
                  <p className={styles.text + " " + styles.textCenter}>
                    <span className={styles.titleMobile}>Type</span>
                    {el.type === "expense" ? "-" : "+"}
                  </p>
                  <p className={el.type === "expense" ? styles.textOrange : styles.textBlue}>
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
                      <button className={styles.button} onClick={() => dispatch(modalEdit(el._id))}>
                        <Edit scale="18" />
                      </button>
                      <button className={styles.button} onClick={() => dispatch(modalDel(el._id))}>
                        <Remove scale="18" />
                      </button>
                    </div>
                  </div>
                </li>
              ))
              .reverse()
          ) : (
            <h1 className={styles.noTransaction}>Please add transaction</h1>
          )}
        </ul>
        <div className={styles.bgIconAdd}></div>
        <div className={styles.iconAdd}>
          <Fab
            onClick={openModalAdd}
            style={{
              backgroundColor: "#ff6c00",
              color: "#fff",
            }}
          >
            <AddIcon />
          </Fab>
          {isModalAddTransactionOpen && <AddTransaction />}
        </div>
      </div>
    </div>
  );
};

export default Main;
