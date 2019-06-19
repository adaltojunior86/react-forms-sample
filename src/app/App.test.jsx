import React from 'react';
import App from './App';
import store from './store/store';
import { renderWithStore } from './helpers/testHelpers';

it('renders without crashing', () => {
  const { getByText } = renderWithStore(<App />, store);
  expect(getByText(/React Forms/)).not.toBeUndefined();
});
