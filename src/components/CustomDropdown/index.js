import React from "react";
import Select from "react-select";
import { useFormikContext, useField } from "formik";

import CustomLabel from "../CustomLabel";

const CustomDropdown = ({ options, label, ...props }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, meta] = useField(props);

  /**
   * Will manually set the value belong to the name props in the Formik form using setField
   */
  function handleOptionChange(selection) {
    setFieldValue(props.name, selection);
  }

  /**
   * Manually updated the touched property for the field in Formik
   */
  function updateBlur() {
    setFieldTouched(props.name, true);
  }

  return (
    <React.Fragment>
      <CustomLabel htmlFor={props.id}>{label}</CustomLabel>
      <Select
        options={options}
        {...field}
        {...props}
        onBlur={updateBlur}
        onChange={handleOptionChange}
      />
      {meta.touched && meta.error ? (
        <span className="custom-input-error">{meta.error.value}</span>
      ) : null}
    </React.Fragment>
  );
};

export default CustomDropdown;
