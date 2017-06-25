/**
 * Created by Vikas
 * DATE : 2017-06-25
 */
'use strict';

/*
 * action types
 */
export const STORE_TABLE_ROW = 'STORE_TABLE_ROW';

/*
 * action creators
 */
export function RowAction(text) {
  return { type: STORE_TABLE_ROW, text: text }
}