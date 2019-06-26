import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { func, element, object, shape } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { InputLabel } from '@material-ui/core';

const renderTextField = ({ input, placeholder, meta: { error, submitFailed } }) => (
  <TextField
    {...input}
    placeholder={placeholder}
    helperText={submitFailed ? error : ''}
    error={Boolean(submitFailed && error)}
  />
);
const onChangeRadioButton = input => (event, value) => input.onChange(value);
const CustomRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    value={input.value}
    onChange={onChangeRadioButton(input)}
  />
);

CustomRadioGroup.propTypes = {
  input: shape({}).isRequired,
};

const validateForm = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'required';
  }
  return errors;
};

const FormReduxForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Fragment>
      <h3>Form with Redux form</h3>
      <form
        onSubmit={handleSubmit(() => {
          console.log('submitted');
        })}
      >
        <Field name="firstName" placeholder="First Name" component={renderTextField} />
        <Field name="lastName" placeholder="Last Name" component={renderTextField} />
        <Field name="email" placeholder="Email" type="email" component={renderTextField} />
        <div className="MuiFormControl-root-103">
          <InputLabel> Gender </InputLabel>
          <Field name="gender" component={CustomRadioGroup}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </Field>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Fragment>
  );
};

FormReduxForm.propTypes = {
  handleSubmit: func.isRequired,
};

const mapStateToProps = state => ({
  reduxFormSampleState: state.form.reduxFormSample,
});
const reduxFormSampleWrapped = reduxForm({
  form: 'reduxFormSample',
  validate: validateForm,
})(FormReduxForm);
const connectedReduxFormSample = connect(mapStateToProps)(reduxFormSampleWrapped);
export default connectedReduxFormSample;
