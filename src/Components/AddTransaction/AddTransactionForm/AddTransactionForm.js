import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';
import { Field, withFormik, Form } from 'formik';
import AddTransactionSchema from './AddTransactionSchema';
import SelectForFormik from './SelectForFormik';
import ReactDatetimeForFormik from './ReactDatetimeForFormik';
import styles from './AddTransactionForm.module.css';
import {ArrowRight} from '../../SVG/sprite'

const innerForm = props => {
    const { values, touched, errors, setFieldValue, setFieldTouched } = props;
    return (
      <Form className={styles.transactionForm}>
        <div className={styles.typeOfTransactionWrapper}>
          <input
            type="radio"
            id="contactChoice1"
            name="typeOfTransaction"
            value="income"
            checked={values.typeOfTransaction === 'income'}
            onChange={() => {
              setFieldValue('typeOfTransaction', 'income');
              setFieldValue('category', '');
            }}
            className={styles.typeRadio}
          />
          <label htmlFor="contactChoice1">Income</label>
  
          <input
            type="radio"
            id="contactChoice2"
            name="typeOfTransaction"
            value="expense"
            checked={values.typeOfTransaction === 'expense'}
            onChange={() => {
              setFieldValue('typeOfTransaction', 'expense');
            }}
            className={styles.typeRadio}
          />
          <label htmlFor="contactChoice2">Expense</label>
        </div>
        {values.typeOfTransaction === 'expense' && (
          <SelectForFormik
            value={values.category}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={errors.category}
            touched={touched.category}
          />
        )}
        <div className={styles.dateAndValueWrapper}>
          <Field
            type="text"
            name="value"
            placeholder="0.00"
            className={styles.valueInput}
            autoComplete="off"
          />
          <Field
            name="timeOfTransaction"
            value={values.timeOfTransaction}
            component={ReactDatetimeForFormik}
          />
        </div>
        <label htmlFor="comment" className={styles.comment}>
          <p>Comment</p>
        </label>
        <Field
          as="textarea"
          id="comment"
          name="comment"
          placeholder="You can input comment here"
          className={styles.inputComment}
        />
        <div className={styles.errorsContainer}>
          {!!errors.category &&
            touched.category &&
            values.typeOfTransaction === 'expense' && (
              <div className={styles.error}>{errors.category}</div>
            )}
          {!!errors.value && touched.value && (
            <div className={styles.error}>{errors.value}</div>
          )}
          {!!errors.timeOfTransaction && touched.timeOfTransaction && (
            <div className={styles.error}>{errors.timeOfTransaction}</div>
          )}
        </div>
        <div className = {styles.transactionModalButton}> 
            <button type="submit" className={styles.transactionButton}>
          Add
        </button>
        </div>
      </Form>
    );
  };
  innerForm.propTypes = {
    values: PropTypes.shape({
      typeOfTransaction: PropTypes.string,
      value: PropTypes.string,
      timeOfTransaction: PropTypes.string,
      category: PropTypes.oneOfType([
        PropTypes.shape({
          value: PropTypes.string,
          label: PropTypes.string,
        }),
        PropTypes.string,
      ]),
    }).isRequired,
    errors: PropTypes.shape({
      value: PropTypes.string,
      category: PropTypes.string,
      timeOfTransaction: PropTypes.string,
    }).isRequired,
    touched: PropTypes.shape({
      value: PropTypes.bool,
      category: PropTypes.oneOfType([
        PropTypes.shape({
          value: PropTypes.bool,
          label: PropTypes.bool,
        }),
        PropTypes.bool,
      ]),
      timeOfTransaction: PropTypes.bool,
      comment: PropTypes.bool,
      typeOfTransaction: PropTypes.bool,
    }).isRequired,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
  };


const EnhancedForm = withFormik({
    mapPropsToValues: () => ({
      typeOfTransaction: 'expense',
      value: '',
      timeOfTransaction: moment().format('DD/MM/YYYY'),
      category: '',
    }),
    validationSchema: AddTransactionSchema,
    handleSubmit: (values, { setSubmitting, props: { onSubmit } }) => {
      const payload = { ...values, category: values.category.value };
      setTimeout(() => {
        console.log(JSON.stringify(payload, null, 2));
        // onSubmit(payload);
        setSubmitting(false);
      }, 100);
    },
    displayName: 'BasicForm', // helps with React DevTools
  })(innerForm);


const AddTransactionForm = ({ closeModalAddTransaction, addTransaction }) => {
    return (
        <>
        <div className={styles.titleWrapper}>
            <div className={styles.controlWrapper}>
                <button
                type="button"
                className={styles.closeModalButton}
                onClick={closeModalAddTransaction}
                >
                    <ArrowRight className = {styles.closeModalButtonImg}/>
                </button>
            <h2 className={styles.title}>add transaction</h2>
            </div>
        </div>
        <EnhancedForm onSubmit={addTransaction} />
    </>
    )
}

AddTransactionForm.propTypes = {
    closeModalAddTransaction: PropTypes.func.isRequired,
    addTransaction: PropTypes.func.isRequired,
  };

export default AddTransactionForm;

