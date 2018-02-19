import {RECEIVE_ALL_EMPLOYEES} from '../actions/employee_actions';
export const RECEIVE_EMPLOYEE = 'RECEIVE_EMPLOYEE';

export const employeesReducer = (oldState = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_EMPLOYEE:
      newState = Object.assign({}, oldState);
      let newEmployee = action.data.data;
      newState[newEmployee.id] = newEmployee;
      return newState;
    case RECEIVE_ALL_EMPLOYEES:
      newState = {};
      const allEmployees = action.data.data;
      allEmployees.forEach( employee => {
        newState[employee.id] = employee;
      });
      return newState;
    default:
      return oldState;
  }
};
