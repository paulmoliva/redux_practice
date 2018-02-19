import { connect } from 'react-redux';
import {EmployeesIndex} from './employees_index';
import { receiveEmployee,
        fetchAllEmployees,
        createNewEmployee} from '../../actions/employee_actions';

const mapStateToProps = state => ({
  employees: state.employees
});

const mapDispatchToProps = dispatch => ({
  fetchAllEmployees: () => dispatch(fetchAllEmployees()),
  createNewEmployee: employee => dispatch(createNewEmployee(employee))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesIndex);
