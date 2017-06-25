
/**
 * Created by Vikas
 * DATE : 2017-06-24
 */
'use strict';

import { combineReducers } from 'redux'

import AuthReducer from './AuthReducer'
import TableReducer from './TableReducer'

const Reducers = combineReducers({
  AuthReducer, 
  TableReducer
})

export default Reducers;
