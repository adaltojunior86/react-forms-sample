/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

export const renderUi = (ui, options) => render(ui, { ...options });
export const renderWithStore = (ui, store, options) => render(
  <Provider store={store}>{ui}</Provider>, { ...options },
);
