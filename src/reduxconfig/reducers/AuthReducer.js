/**
 * Created by Vikas
 * DATE : 2017-06-24
 */
'use strict';

import { STORE_AUTH, STORE_USER} from '../actions/EmmitAuthActions';

const initialState = {
  loginDetails: {
      isLoggedIn: false,
      appMounted: false
  },
  userDetails: {
      userName:""
  } 
}

export default function AuthReducer(state = initialState , action) {
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
}