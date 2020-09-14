import React, {useEffect,createRef} from "react";
import PropTypes from 'prop-types';
import AddTransactionForm from './AddTransactionForm/AddTransactionForm';
import styles from './AddTransaction.css';


const AddTransaction = () => {
  return (
    <div
        className={styles.backdrop}
        // ref={backdropRef}
        // onClick={handleBackdropClick}
        // role="presentation"
      >
        <div className={styles.modal}>
          <AddTransactionForm
            // closeModalAddTransaction={closeModalAddTransaction}
            // addTransaction={addTransaction}
          />
        </div>
      </div>
  );
};

export default AddTransaction;
