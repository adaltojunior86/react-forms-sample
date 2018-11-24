import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import './App.css';
import FormReduxForm from './forms/FormReduxForm';
import formWithFormik from './forms/FormWithFormik';
import FormVanilla from './forms/FormVanilla';

const App = () => (
  <section>
    <MenuList>
      <MenuItem>
        <Link to="/form-vanilla"> Form Vanilla </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/form-redux-form"> Form with redux-form </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/form-formik"> Form with Formik </Link>
      </MenuItem>
    </MenuList>
    <Switch>
      <Route path="/form-vanilla" component={FormVanilla} />
      <Route path="/form-redux-form" component={FormReduxForm} />
      <Route path="/form-formik" component={formWithFormik} />
    </Switch>
  </section>
);

export default App;
