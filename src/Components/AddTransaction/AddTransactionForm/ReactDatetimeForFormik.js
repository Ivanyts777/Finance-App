import React from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import moment from 'moment';
import './ReactDatetimeForFormik.css';

const DATE_FORMAT = 'DD/MM/YYYY';

const ReactDatetimeForFormik = ({ field, form, value }) => {
  const onFieldChange = val => {
    let dateValue = val;
    // if the date field isn't in a valid date format,
    // react-datetime's onChange handler returns a string
    // otherwise it returns a moment object
    // this is why we can't override DateTime's onChange
    // prop with Formik's field.onChange
    if (val instanceof moment) {
      dateValue = moment(val).format(DATE_FORMAT);
    }

    form.setFieldValue(field.name, dateValue);
  };

  const onFieldBlur = () => {
    form.setFieldTouched(field.name, true);
  };

  return (
    <Datetime
      closeOnSelect
      dateFormat={DATE_FORMAT}
      value={value}
      timeFormat={false}
      id={field.name}
      name={field.name}
      onChange={onFieldChange}
      onBlur={onFieldBlur}
      inputProps={{ readOnly: true }}
    />
  );
};

ReactDatetimeForFormik.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
};

export default ReactDatetimeForFormik;