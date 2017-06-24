//creating the reducer to update the store
import { STORE_LOGIN } from '../action_creator/loginAction'

const initialState = {
  userDetails: {
      id: "",
      password: ""
  } 
}

export default function loginReducer(state = initialState , action) {
  switch (action.type) {
    case STORE_LOGIN:
      return Object.assign({}, state, {
        userDetails: action.text
      })
    default:
      return state
  }
}