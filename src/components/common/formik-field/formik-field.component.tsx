import React, { FC, ChangeEvent } from 'react';
import { useFormikContext } from 'formik';
import { TextFieldProps } from '@material-ui/core';

import { camelToTitle } from 'utils';

import { StyledTextField } from './formik-field.styles';

/* -------------------------------------------------------------------------- */

type Props = TextFieldProps & {
  name: string;
};

type FormikProps = {
  [name: string]: string;
};

const FormikField: FC<Props> = ({ name, ...otherProps }) => {
  /**
   * Set formik function into field
   */

  const { values, setFieldValue, touched, setFieldTouched, errors, isSubmitting } = useFormikContext<FormikProps>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setFieldValue(name, e.target.value);

  const handleBlue = () => setFieldTouched(name);

  /**
   * Change name from camel to capitalize to display as label
   */

  const label = camelToTitle(name);

  return (
    <StyledTextField
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlue}
      error={touched[name] && !!errors[name]}
      helperText={touched[name] && !!errors[name] && errors[name]}
      disabled={isSubmitting}
      id={name}
      autoComplete={name}
      label={label}
      variant="outlined"
      margin="normal"
      {...otherProps}
    />
  );
};

export default FormikField;
