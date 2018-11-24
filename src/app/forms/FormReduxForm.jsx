import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const renderTextField = ({
  input, placeholder, meta: { error, submitFailed },
}) => (
  <TextField
    {...input}
    placeholder={placeholder}
    helperText={(submitFailed) ? error : ''}
    error={submitFailed && error}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    value={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

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
      <h3>
        Form with Redux form
      </h3>
      <form onSubmit={
        handleSubmit(() => {
          console.log('submitted');
        })}
      >
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
        <button type="submit">Submit</button>
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
