import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { Field, withFormik, Form } from "formik";
import ChangeTransactionSchema from "./ChangeTransactionSchema";
import SelectForFormik from "./SelectForFormik";
import ReactDatetimeForFormik from "./ReactDatetimeForFormik";
import { ArrowRight } from "../../SVG/sprite";

import styles from "./AddTransactionForm.module.css";

const { transactionForm, typeOfTransactionWrapper, typeRadio, valueInput, dateAndValueWrapper, comment, inputComment, errorsContainer, error, transactionModalButton, transactionButton, titleWrapper, controlWrapper, closeModalButton, closeModalButtonImg, title } = styles;

const innerForm = (props) => {
  const { values, touched, errors, setFieldValue, setFieldTouched } = props;
  return (
    <Form className={transactionForm}>
      <div className={typeOfTransactionWrapper}>
        <input
          type="radio"
          id="contactChoice1"
          name="typeOfTransaction"
          value="income"
          checked={values.typeOfTransaction === "income"}
          onChange={() => {
            setFieldValue("typeOfTransaction", "income");
            setFieldValue("category", "");
          }}
          className={typeRadio}
        />
        <label htmlFor="contactChoice1">Income</label>

        <input
          type="radio"
          id="contactChoice2"
          name="typeOfTransaction"
          value="expense"
          checked={values.typeOfTransaction === "expense"}
          onChange={() => {
            setFieldValue("typeOfTransaction", "expense");
          }}
          className={typeRadio}
        />
        <label htmlFor="contactChoice2">Expense</label>
      </div>
      {values.typeOfTransaction === "expense" && <SelectForFormik value={values.category} onChange={setFieldValue} onBlur={setFieldTouched} error={errors.category} touched={touched.category} />}
      <div className={dateAndValueWrapper}>
        <Field type="text" name="value" placeholder="0.00" className={valueInput} autoComplete="off" />
        <Field name="timeOfTransaction" value={values.timeOfTransaction} component={ReactDatetimeForFormik} />
      </div>
      <label htmlFor="comment" className={comment}>
        <p>Comment</p>
      </label>
      <Field as="textarea" id="comment" name="comment" placeholder="You can input comment here" className={inputComment} />
      <div className={errorsContainer}>
        {!!errors.category && touched.category && values.typeOfTransaction === "expense" && <div className={error}>{errors.category}</div>}
        {!!errors.value && touched.value && <div className={error}>{errors.value}</div>}
        {!!errors.timeOfTransaction && touched.timeOfTransaction && <div className={error}>{errors.timeOfTransaction}</div>}
      </div>
      <div className={transactionModalButton}>
        <button type="submit" className={transactionButton}>
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
    typeOfTransaction: "expense",
    value: "",
    timeOfTransaction: moment().format("DD/MM/YYYY"),
    category: "",
    balanceAfter: "",
  }),
  validationSchema: ChangeTransactionSchema,
  handleSubmit: (values, { setSubmitting, props: { onSubmit } }) => {
    const payload = { ...values, category: values.category.value };
    setTimeout(() => {
      // console.log(JSON.stringify(payload, null, 2));
      onSubmit(payload);
      setSubmitting(false);
    }, 100);
  },
  displayName: "BasicForm", // helps with React DevTools
})(innerForm);

const ChangeTransactionForm = ({ changeTransaction, closeModalAddTransaction }) => {
  return (
    <>
      <div className={titleWrapper}>
        <div className={controlWrapper}>
          <button type="button" className={closeModalButton} onClick={closeModalAddTransaction}>
            <ArrowRight className={closeModalButtonImg} />
          </button>
          <h2 className={title}>Change transaction</h2>
        </div>
      </div>
      <EnhancedForm onSubmit={addTransaction} />
    </>
  );
};

AddTransactionForm.propTypes = {
  closeModalAddTransaction: PropTypes.func.isRequired,
  addTransaction: PropTypes.func.isRequired,
};

export default ChangeTransactionForm;
