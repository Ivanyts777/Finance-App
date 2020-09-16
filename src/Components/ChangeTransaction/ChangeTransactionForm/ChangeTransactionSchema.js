import * as Yup from 'yup';

const ChangeTransactionSchema = Yup.object().shape({
  typeOfTransaction: Yup.string().required(),
  category: Yup.string().when('typeOfTransaction', {
    is: typeOfTransaction => typeOfTransaction === 'expense',
    then: Yup.string().required('Category is required!'),
  }),
  value: Yup.number()
    .typeError('Value must be a number!')
    .required('Value is required!'),
  comment: Yup.string(),
  timeOfTransaction: Yup.string()
    .matches(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/, {
      message: 'Date must be in format DD/MM/YYYY',
    })
    .required('Dateis is required!'),
});

export default ChangeTransactionSchema;