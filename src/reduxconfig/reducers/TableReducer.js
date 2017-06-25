/**
 * Created by Vikas
 * DATE : 2017-06-24
 */
'use strict';

/**
 * Import app required files
 */
import { STORE_TABLE_ROW } from '../actions/EmmitTableActions';

/**
 * Initilizing login values
 */
const initialState = {
  RowDetails: {
    title: "",
    description: ""
  }
};


/**
 * Auth reducer function adding object in Redux Store
 * @param {*} state 
 * @param {*} action 
 */
export default function TableReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_TABLE_ROW:
      return Object.assign({}, state, {
        RowDetails: action.text
      });
    default:
      return state
  }
};
