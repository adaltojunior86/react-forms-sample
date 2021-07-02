import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { InputLabel } from '@material-ui/core';
import { shape, string } from 'prop-types';

const renderTextField = ({ field, placeholder, form: { submitCount, errors } }) => (
  <TextField
    {...field}
    placeholder={placeholder}
    helperText={submitCount && errors[field.name] ? errors[field.name] : ''}
    error={Boolean(submitCount && errors[field.name])}
  />
);

renderTextField.propTypes = {
  field: shape({}).isRequired,
  placeholder: string.isRequired,
  form: shape({}).isRequired,
};

const onChangeGender = (setFieldValue) => (event, value) => {
  setFieldValue('sex', value);
};

const renderRadioGroup = ({ field, children, form: { setFieldValue } }) => (
  <RadioGroup {...field} onChange={onChangeGender(setFieldValue)}>
    {children}
  </RadioGroup>
);

renderRadioGroup.propTypes = {
  field: shape({}).isRequired,
  children: string.isRequired,
  form: shape({}).isRequired,
};

renderTextField.propTypes = {
  field: shape({}).isRequired,
  children: string.isRequired,
  form: shape({}).isRequired,
};

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  sex: 'female',
};

const onValidate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'required';
  }
  return errors;
};

const onSubmit = (props) => {
  console.log(props);
};

const RenderForm = () => (
  <Form>
    <Field name="firstName" placeholder="First Name" component={renderTextField} />
    <Field name="lastName" placeholder="Last Name" component={renderTextField} />
    <Field name="email" placeholder="Email" type="email" component={renderTextField} />
    <div className="MuiFormControl-root-103">
      <InputLabel> Gender </InputLabel>
      <Field name="gender" component={renderRadioGroup}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </Field>
    </div>
    <Button type="submit">Submit</Button>
  </Form>
);

const FormWithFormik = () => (
  <>
    <h3>Form with Formik</h3>
    <Formik
      validate={onValidate}
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={RenderForm}
    />
  </>
);

export default FormWithFormik;
