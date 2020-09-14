import React, {createRef} from "react";
// import PropTypes from 'prop-types';
import AddTransactionForm from './AddTransactionForm/AddTransactionForm';
import styles from './AddTransaction.css';



const AddTransaction = () => {
  
const backdropRef = createRef();

// useEffect(() => {
//   window.addEventListener('keydown', handleKeyPress());
//   document.body.style.overflow = 'hidden';
//   return function cleanup() {
//     window.removeEventListener('keydown', handleKeyPress);
//     document.body.style.overflow = 'unset';
//   };
// })


// const handleKeyPress = e => {
//   if (e.code !== 'Escape') {
//     return;
//   }
//   // props.closeModalAddTransaction();
// };


const handleBackdropClick = e => {
  if (backdropRef.current && e.target !== backdropRef.current) {
    return;
  }

  // closeModalAddTransaction();
};

// const { closeModalAddTransaction, addTransaction } = props;

  return (
    <div
        className={styles.backdrop}
        ref={backdropRef}
        onClick={handleBackdropClick}
        // role="presentation"
      >
        <div className={styles.modal}>
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
