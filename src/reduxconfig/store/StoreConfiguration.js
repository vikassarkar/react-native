/**
 * Created by Vikas
 * DATE : 2017-06-24
 */
'use strict';

/**
 * Import app required files
 */
import React from 'react';
import { createStore } from 'redux';
import Reducers from '../reducers/IndexReducer';

/**
 * This connects the reducer to the store
 */
function configureStore() {
  let store = createStore(
    Reducers
  )
  return store;
}

/**
 * create store
 */
const store = configureStore({});

export default store;

