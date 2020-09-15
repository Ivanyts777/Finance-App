import React, {createRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { modalAdd,setData } from "../../redux/Actions";
import AddTransactionForm from './AddTransactionForm/AddTransactionForm';

import styles from './AddTransaction.css';



const {backdrop,modal} = styles

const AddTransaction = () => {
  // const backdropRef = createRef();





  return (
    <div
        className={backdrop}
        // ref={backdropRef}
        // onClick={handleBackdropClick}
        role="presentation"
      >
        <div className={modal}>
          <AddTransactionForm
            // closeModalAddTransaction={closeModalAddTransaction()}
            // addTransaction={addTransaction()}
          />
        </div>
      </div>
  );
};

// AddTransaction.propTypes = {
//   closeModalAddTransaction: PropTypes.func.isRequired,
//   addTransaction: PropTypes.func.isRequired,
// };

export default AddTransaction;
