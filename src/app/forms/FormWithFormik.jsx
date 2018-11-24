import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const renderTextField = ({
  field,
  placeholder,
  form: { submitCount, errors }
}) => (
  <TextField
    {...field}
    placeholder={placeholder}
    helperText={
      (submitCount && errors[field.name])
        ? errors[field.name] : ''
    }
    error={Boolean(submitCount && errors[field.name])}
  />
);

const renderRadioGroup = ({ field, children, form: { setFieldValue } }) => {
  return (
    <RadioGroup
      {...field}
      onChange={(event, value) => {
        setFieldValue('sex', value);
      }}
    >
      {children}
    </RadioGroup>
  );
};

const formWithFormik = () => {
  return (
    <Fragment>
      <h3>
        Form with Formik
      </h3>
      <Formik
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = 'required'
          }
          return errors;
        }}
        initialValues={({
          firstName: '',
          lastName: '',
          email: '',
          sex: 'female'
        })}
        onSubmit={(props) => {
          console.log(props);
        }}
        render={() => {
          return (
            <Form>
              <Field
                name="firstName"
                placeholder="First Name"
                component={renderTextField}
              />
              <Field
                name="lastName"
                placeholder="Last Name"
                component={renderTextField}
              />
              <Field
                name="email"
                placeholder="Email"
                type="email"
                component={renderTextField}
              />
              <Field name="sex" component={renderRadioGroup}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </Field>
              <Button type="submit" >Submit</Button>
            </Form>
          )
        }} />
    </Fragment>
  )
}

export default formWithFormik;