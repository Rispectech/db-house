import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { categoryReducer } from './categories';
import { userReducer } from './user';

export const rootReducer = combineReducers({ user: userReducer, categories: categoryReducer, cart: cartReducer });