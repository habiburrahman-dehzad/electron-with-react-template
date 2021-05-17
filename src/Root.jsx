import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store/createStore';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
