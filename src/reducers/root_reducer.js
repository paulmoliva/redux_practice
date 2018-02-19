import { combineReducers } from 'redux';
import {employeesReducer} from './employees_reducer';

export const rootReducer = combineReducers({
  employees: employeesReducer
});
