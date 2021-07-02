import React from 'react';
import './App.css';
import { AppBar, Tabs, Tab, Typography, Toolbar } from '@material-ui/core';
import FormReduxForm from './forms/FormReduxForm';
import FormWithFormik from './forms/FormWithFormik';
import FormVanilla from './forms/FormVanilla';
import FormHooks from './forms/FormHooks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: 1,
    };
    this.onChangeTab = this.onChangeTab.bind(this);
  }

  onChangeTab = (event, value) => {
    this.setState({
      tabSelected: value,
    });
  };

  renderForm = (tabSelected) => {
    switch (tabSelected) {
      case 1:
        return <FormReduxForm />;
      case 2:
        return <FormWithFormik />;
      case 3:
        return <FormHooks />;
      default:
        return <FormVanilla />;
    }
  };

  render() {
    const { tabSelected } = this.state;
    return (
      <section>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h3">React Forms</Typography>
          </Toolbar>

          <Tabs value={tabSelected} onChange={this.onChangeTab} centered>
            <Tab label="Form Vanilla" />
            <Tab label="Form with redux-form" />
            <Tab label="Form with Formik" />
            <Tab label="Form with useState" />
          </Tabs>
        </AppBar>
        <section>{this.renderForm(tabSelected)}</section>
      </section>
    );
  }
}

export default App;
