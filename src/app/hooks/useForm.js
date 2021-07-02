import { useState } from 'react';

const validateForm = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'required';
  }
  return errors;
};

const useForm = () => {
  const [values, setValues] = useState({});
  const onChange = ({ target: { name, value } }) => {
    const state = {};
    state[name] = value;
    setValues(state);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, gender, submitFailed } = values;
    const valuesRequired = validateForm({
      firstName,
      lastName,
      email,
      gender,
    });
    if (Object.keys(valuesRequired).length) {
      setValues({
        errors: valuesRequired,
        submitFailed: true,
      });
    } else if (submitFailed) {
      setValues({ errors: {}, submitFailed: false });
    }
  };

  return [values, onChange, onSubmit];
};

export default useForm;
