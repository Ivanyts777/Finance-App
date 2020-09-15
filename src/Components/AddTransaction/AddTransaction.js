import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {modalAdd} from '../../redux/Actions'
import {useDispatch } from "react-redux";
import styles from './AddTransaction.module.css';
import AddTransactionForm from './AddTransactionForm/AddTransactionForm';



const AddTransaction =(props) =>{

const backdropRef = createRef();

const dispatch = useDispatch(modalAdd(false));





// useEffect(() => {
//   dispatch(modalAdd(true));
//   // window.addEventListener('keydown', handleKeyPress());
//   document.body.style.overflow = 'hidden';
//   return () => {
//   dispatch(modalAdd(false));
//   // window.removeEventListener('keydown', handleKeyPress());
//   document.body.style.overflow = 'unset';
//   }
// }, [dispatch])


// const handleBackdropClick = e => {
//   if (backdropRef.current && e.target !== backdropRef.current) {
//     return;
//   }

//   dispatch(modalAdd(false));
// };

// const handleKeyPress = e => {
//   if (e.code !== 'Escape') {
//     return;
//   }
//   dispatch(modalAdd(false));
// };

const { closeModalAddTransaction, addTransaction } = props;
  return (
    <div
      className={styles.backdrop}
      ref={backdropRef}
      // onClick={handleBackdropClick}
      role="presentation"
    >
      <div className={styles.modal}>
        <AddTransactionForm
          closeModalAddTransaction={closeModalAddTransaction}
          addTransaction={addTransaction}
        />
      </div>
    </div>
  );
}

export default AddTransaction;
