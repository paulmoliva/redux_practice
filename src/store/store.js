import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from '../reducers/root_reducer';
import Logger from 'redux-logger';
import Thunk from 'redux-thunk';

export const configureStore = (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(Logger, Thunk));
};
