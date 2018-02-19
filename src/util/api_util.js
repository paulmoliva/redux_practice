import axios from 'axios';

const fetchAllEmployees = () => {
  return axios.get('http://localhost:3000/employees');
};

const APIUtil = {
  fetchAllEmployees: fetchAllEmployees
};

export default APIUtil;
