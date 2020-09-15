import React, { createRef, useEffect } from 'react';
import {modalAdd, setData} from '../../redux/Actions'
import {setPost} from '../Operations/operationsBD'
import moment from 'moment';
import {useDispatch } from "react-redux";
import styles from './AddTransaction.module.css';
import AddTransactionForm from './AddTransactionForm/AddTransactionForm';



const AddTransaction =() =>{

const backdropRef = createRef();
// const isModalAddTransactionOpen = useSelector((state) => state.global.isModalAddTransactionOpen)
const dispatch = useDispatch();


useEffect(() => {
  window.addEventListener('keydown', handleKeyPress);
  document.body.style.overflow = 'hidden';
  return () => {
  window.removeEventListener('keydown',handleKeyPress);
  document.body.style.overflow = 'unset';
  }
},)

const handleKeyPress = e => {
  if (e.code !== 'Escape') {
    return;
  }

  closeModal();
};

const handleBackdropClick = e => {
  if (backdropRef.current && e.target !== backdropRef.current) {
    return;
  }

  closeModal();
};

 const closeModal =() => {
  dispatch(modalAdd(false));
  }

  // const addTransaction = (e) => {
  //   e.preventDefault();
  //   dispatch(setPost());
  // };
const addTransaction = submittedData => {
    dispatch(setPost());
    let {
      typeOfTransaction,
      timeOfTransaction,
      value,
      category,
      comment,
      balanceAfter,
    } = submittedData;
  
    const transactionDate = moment(timeOfTransaction, 'DD/MM/YYYY').toISOString();
  
    const reqData = {
      type: typeOfTransaction,
      transactionDate,
      amount: +value,
      category,
      comment,
      balanceAfter
  };
  dispatch(setData(reqData));
}

  // const addTransaction = ()=>{
  //   dispatch(setPost());
  // }

  return (
    <div
      className={styles.backdrop}
      ref={backdropRef}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className={styles.modal}>
        <AddTransactionForm
          closeModalAddTransaction={closeModal}
          addTransaction={addTransaction}
        />
      </div>
    </div>
  );
}

export default AddTransaction;
