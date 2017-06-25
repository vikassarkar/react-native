/**
 * Created by Vikas
 * DATE : 2017-06-24
 */
'use strict';

import {STORE_TABLE_ROW} from '../actions/EmmitTableActions';

const initialState = {
  RowDetails: {
    title: "",
    description: ""
  }
}

export default function TableReducer(state = initialState , action) {
  switch (action.type) {
    case STORE_TABLE_ROW:
      return Object.assign({}, state, {
        RowDetails: action.text
      });
    default:
      return state
  }
}
