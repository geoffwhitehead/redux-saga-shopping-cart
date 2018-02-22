import { take, fork, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {
  SET_CART_ITEMS, 
  setItemDetails
} from '../actions';

export function* loadItemDetails() {
  console.log('item ', item);
}

export function* itemDetailsSaga() {
  const { items } = yield take(SET_CART_ITEMS);
  yield items.map(item=>fork(loadItemDetails, item))
} 