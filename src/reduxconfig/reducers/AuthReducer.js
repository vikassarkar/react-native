/**
 * Created by Vikas
 * DATE : 2017-06-24
 */
'use strict';

/**
 * Import app required files
 */
import { STORE_AUTH, STORE_USER } from '../actions/EmmitAuthActions';

/**
 * Initilizing login values
 */
const initialState = {
  loginDetails: {
    isLoggedIn: false,
    appMounted: false
  },
  userDetails: {
    userName: ""
  }
};

/**
 * Auth reducer function adding object in Redux Store
 * @param {*} state 
 * @param {*} action 
 */
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_AUTH:
      return Object.assign({}, state, {
        loginDetails: action.text
      });
    case STORE_USER:
      return Object.assign({}, state, {
        userDetails: action.text
      });
    default:
      return state
  }
};