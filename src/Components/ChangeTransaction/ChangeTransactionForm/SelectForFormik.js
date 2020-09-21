import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import Select from 'react-select';
import CreatableSelect from "react-select/creatable";
import styles from "./ChangeTransactionForm.module.css";

const createOption = (label) => ({
  label: label.charAt(0).toUpperCase() + label.substr(1).toLowerCase(),
  value: label.charAt(0).toUpperCase() + label.substr(1).toLowerCase(),
});

const option = [
  createOption("Food"),
  createOption("Car"),
  createOption("Self-care"),
  createOption("Children"),
  createOption("Home-care"),
  createOption("Education"),
  // createOption('Other')
];

// const options = [
//   { value: 'Food', label: 'Food' },
//   { value: 'Car', label: 'Car' },
//   { value: 'Self-care', label: 'Self-care' },
//   { value: 'Children', label: 'Children' },
//   { value: 'Home-care', label: 'Home-care' },
//   { value: 'Education', label: 'Education' },
//   { value: 'Hobbies', label: 'Hobbies' },
//   // { value: 'Other', label: 'Other' },
// ];

const SelectForFormik = ({ value, onChange, onBlur }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(option);

  const handleChange = (newValue) => {
    onChange("category", newValue);
  };

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions([...options, newOption]);
      onChange("category", newOption);
    }, 1000);
  };

  const handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    onBlur("category", true);
  };

  const save = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      throw new Error();
    }
  };
  const get = (key) => {
    try {
      const items = localStorage.getItem(key);
      return items ? JSON.parse(items) : null;
    } catch (err) {
      throw new Error();
    }
  };

  useEffect(() => {
    const optionsData = get("options");
    if (!optionsData) {
      save("options", []);
      return;
    }
    setOptions(optionsData);
  }, []);

  useEffect(() => {
    save("options", options);
  }, [options]);

  // const handleChange = val => {

  //   // this is going to call setFieldValue and manually update values.topcis
  //   onChange('category', val);
  // };

  return (
    <>
      <CreatableSelect
        // placeholder="Category"
        isDisabled={isLoading}
        isLoading={isLoading}
        options={options}
        className={styles.select}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (control) => ({
            ...control,
            border: "2px solid #b9c9d4",
          }),
        }}
        onChange={handleChange}
        onCreateOption={handleCreate}
        onBlur={handleBlur}
        value={value === undefined ? value : {label: value}}
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
