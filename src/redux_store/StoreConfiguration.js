//it for creating redux store
import React from 'react';
import { createStore } from 'redux';
import AuthReducer from '../redux_reducers/AuthReducer';

// This connects the reducer to the store
function configureStore() {
  let store = createStore(
    AuthReducer
  )
  return store;
}

const store = configureStore({});

export default store;

