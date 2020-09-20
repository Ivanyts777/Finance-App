import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from './ChangeTransactionForm.module.css';

const options = [
  { value: 'Food', label: 'Food' },
  { value: 'Car', label: 'Car' },
  { value: 'Self-care', label: 'Self-care' },
  { value: 'Children', label: 'Children' },
  { value: 'Home-care', label: 'Home-care' },
  { value: 'Education', label: 'Education' },
  { value: 'Hobbies', label: 'Hobbies' },
  { value: 'Other', label: 'Other' },
];

const SelectForFormik = ({ value, onChange, onBlur}) => {
  const handleChange = val => {
    
    // this is going to call setFieldValue and manually update values.topcis
    onChange('category', val);
  };

  const handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    onBlur('category', true);
  };

  return (
    <>
      <Select
        // placeholder="Category"
        options={ options}
        className={styles.select}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: control => ({
            ...control,
            border: '2px solid #b9c9d4',
          }),
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={{value: value, label: value}}
      />
    </>
  );
};

SelectForFormik.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default SelectForFormik;