import React, { createRef, useEffect } from "react";
import { modalEdit } from "../../redux/Slice";
import { removePost, setPost } from "../Operations/operationsBD";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ChangeTransaction.module.css";
import ChangeTransactionForm from "./ChangeTransactionForm/ChangeTransactionForm";

const ChangeTransaction = () => {
  const backdropRef = createRef();
  // const isModalAddTransactionOpen = useSelector((state) => state.global.isModalAddTransactionOpen)
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);
  // const balance = useSelector((state) => state.finance.balance);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "unset";
    };
  });

  const handleKeyPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }

    closeModal();
  };

  const handleBackdropClick = (e) => {
    if (backdropRef.current && e.target !== backdropRef.current) {
      return;
    }

    closeModal();
  };

  const closeModal = () => {
    dispatch(modalEdit(false));
  };

  // const addTransaction = (e) => {
  //   e.preventDefault();
  //   dispatch(setPost());
  // };
  const addTransaction = async (submittedData, idOldTransaction) => {
    await dispatch(modalEdit(false));
    await dispatch(removePost(idOldTransaction, session.token));
    let { typeOfTransaction, timeOfTransaction, value, category, comment } = submittedData;
    const transactionDate = moment(timeOfTransaction, "DD/MM/YYYY").toISOString();

    const reqData = {
      type: typeOfTransaction,
      transactionDate,
      amount: +value,
      category,
      comment,
    };

    await dispatch(setPost(session.token, reqData));
  };

  return (
    <div className={styles.backdrop} ref={backdropRef} onClick={handleBackdropClick} role="presentation">
      <div className={styles.modal}>
        <ChangeTransactionForm closeModalAddTransaction={closeModal} addTransaction={addTransaction} />
      </div>
    </div>
  );
};

export default ChangeTransaction;
