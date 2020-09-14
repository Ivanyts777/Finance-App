import * as Yup from 'yup';

const AddTransactionSchema = Yup.object().shape({
  typeOfTransaction: Yup.string().required(),
  category: Yup.string().when('typeOfTransaction', {
    is: typeOfTransaction => typeOfTransaction === 'expense',
    then: Yup.string().required('category is required!'),
  }),
  value: Yup.number()
    .typeError('value must be a number!')
    .required('value is required!'),
  comment: Yup.string(),
  timeOfTransaction: Yup.string()
    .matches(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/, {
      message: 'date must be in format DD/MM/YYYY',
    })
    .required('dateis is required!'),
});

export default AddTransactionSchema;