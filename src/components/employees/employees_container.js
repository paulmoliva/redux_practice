import { connect } from 'react-redux';
import {EmployeesIndex} from './employees_index';
import {receiveEmployee, fetchAllEmployees} from '../../actions/employee_actions';

const mapStateToProps = state => ({
  employees: state.employees
});

const mapDispatchToProps = dispatch => ({
  receiveEmployee: employee => dispatch(receiveEmployee(employee)),
  fetchAllEmployees: () => dispatch(fetchAllEmployees())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesIndex);
