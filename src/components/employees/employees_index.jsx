import React from 'react';
import NewEmployeeFormContainer from './new_employee_form';

export class EmployeesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllEmployees();
  }

  render(){
    if(Object.keys(this.props.employees).length) {
      return (
        <div>
        <ul>
          {Object.keys(this.props.employees).map( (employeeID, idx) => {
            return (
              <li key={idx}>{this.props.employees[employeeID].fullName}</li>
            );
          })}
        </ul>
        <NewEmployeeFormContainer />
      </div>
      );
    } else {
      return (
        <div>
        <p>No Employees found</p>
        <NewEmployeeFormContainer />
        </div>
      );
    }
  }
}
