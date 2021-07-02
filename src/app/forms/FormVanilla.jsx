import React, { Fragment } from 'react';
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
} from '@material-ui/core';

class FormVanilla extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    errors: {
      firstName: '',
    },
  };

  onChange = (event) => {
    const state = {};
    const { name, value } = event.target;
    state[name] = value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, gender } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      gender,
    };
    const errors = this.validateForm(values);
    if (Object.keys(errors).length) {
      this.setState({
        errors,
        submitFailed: true,
      });
    } else {
      this.setState({ errors: {}, submitFailed: false });
    }
  };

  validateForm = ({ firstName }) => {
    const errors = {};
    if (!firstName) {
      errors.firstName = 'required';
    }
    return errors;
  };

  render() {
    const { firstName, lastName, email, gender, errors, submitFailed } = this.state;
    return (
      <>
        <h3>Form without framework</h3>
        <form onSubmit={this.onSubmit}>
          <TextField
            name="firstName"
            value={firstName}
            placeholder="First name"
            onChange={this.onChange}
            helperText={errors.firstName}
            error={Boolean(submitFailed && errors.firstName)}
          />
          <TextField
            name="lastName"
            value={lastName}
            placeholder="Last name"
            onChange={this.onChange}
          />
          <TextField name="email" value={email} placeholder="Email" onChange={this.onChange} />
          <div className="MuiFormControl-root-103">
            <InputLabel> Gender </InputLabel>
            <RadioGroup name="gender" value={gender} onChange={this.onChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </>
    );
  }
}

export default FormVanilla;
