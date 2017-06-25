/**
 * Created by Vikas
 * DATE : 2017-06-24
 */
'use strict';

/*
 * action types
 */

export const STORE_AUTH = 'STORE_AUTH';
export const STORE_USER = 'STORE_USER';

/*
 * action creators
 */
export function AuthAction(text) {
  return { type: STORE_AUTH, text: text }
};
export function UserAction(text) {
  return { type: STORE_USER, text: text }
};