import APIUtil from '../util/api_util';
export const RECEIVE_EMPLOYEE = 'RECEIVE_EMPLOYEE';
export const RECEIVE_ALL_EMPLOYEES = 'RECEIVE_ALL_EMPLOYEES';
export const FETCH_ALL_EMPLOYEES = 'FETCH_ALL_EMPLOYEES';

export const receiveEmployee = employee => ({
  type: RECEIVE_EMPLOYEE,
  data: employee
});

export const receiveAllEmployees = employees => ({
  type: RECEIVE_ALL_EMPLOYEES,
  data: employees
});

export const fetchAllEmployees = () => dispatch => {
  return APIUtil.fetchAllEmployees()
  .then(employees => dispatch(receiveAllEmployees(employees)));
};

export const createNewEmployee = employee => dispatch => {
  return APIUtil.createNewEmployee(employee)
  .then(newEmployee => dispatch(receiveEmployee(newEmployee)));
};
