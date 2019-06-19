import React, { Fragment } from 'react';
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
} from '@material-ui/core';
import useForm from '../hooks/useForm';

const FormHooks = () => {
  const [{
    firstName, lastName, email, gender, submitFailed, errors,
  }, onChange, onSubmit] = useForm();
  return (
    <Fragment>
      <h3>Form using useREducer</h3>
      <form onSubmit={onSubmit}>
        <TextField
          name="firstName"
          value={firstName}
          placeholder="First name"
          onChange={onChange}
          helperText={submitFailed ? errors.firstName : ''}
          error={Boolean(submitFailed && errors.firstName)}
        />
        <TextField name="lastName" value={lastName} placeholder="Last name" onChange={onChange} />
        <TextField name="email" value={email} placeholder="Email" onChange={onChange} />
        <div className="MuiFormControl-root-103">
          <InputLabel> Gender </InputLabel>
          <RadioGroup name="gender" value={gender} onChange={onChange}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Fragment>
  );
};

export default FormHooks;
