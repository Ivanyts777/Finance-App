import React, {createRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { modalAdd,setData } from "../../redux/Actions";
import AddTransactionForm from './AddTransactionForm/AddTransactionForm';

import styles from './AddTransaction.css';



const {backdrop,modal} = styles

const AddTransaction = () => {



  return (
    <div
        className={backdrop}
        role="presentation"
      >
        <div className={modal}>
          <AddTransactionForm
          />
        </div>
      </div>
  );
};


export default AddTransaction;
