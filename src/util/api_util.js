import axios from 'axios';

const fetchAllEmployees = () => {
  return axios.get('http://localhost:3000/employees');
};

const createNewEmployee = employee => {
  return axios.post('http://localhost:3000/employees', employee);
};

const APIUtil = {
  fetchAllEmployees: fetchAllEmployees,
  createNewEmployee: createNewEmployee
};

export default APIUtil;
