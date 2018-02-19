import React from 'react';

export class EmployeesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllEmployees();
  }

  render(){
    if(Object.keys(this.props.employees).length) {
      return (
        <ul>
          {Object.keys(this.props.employees).map( (employeeID, idx) => {
            return (
              <li key={idx}>{this.props.employees[employeeID].fullName}</li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <p>No Employees found</p>
      );
    }
  }
}
