
/**
 * Created by Vikas
 * DATE : 2017-06-24
 */
'use strict';

/**
 * Import app required files
 */
import { combineReducers } from 'redux';

/**
 * Initilizing login values
 */
import AuthReducer from './AuthReducer';
import TableReducer from './TableReducer';

/**
 * combining all available reducers to be available to store
 */
const Reducers = combineReducers({
  AuthReducer, 
  TableReducer
});

export default Reducers;
