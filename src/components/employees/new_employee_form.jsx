import React from 'react';
import { connect } from 'react-redux';
import {createNewEmployee} from '../../actions/employee_actions';

class NewEmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      DOB: '',
      role: ''
    };
    this.handleDOBChange = this.handleDOBChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleFullNameChange(e) {
    this.setState({
      fullName: e.target.value
    });
  }

  handleDOBChange(e) {
    this.setState({
      DOB: e.target.value
    });
  }

  handleRoleChange(e) {
    this.setState({
      role: e.target.value
    });
  }

  clearForm() {
    this.setState({
      fullName: '',
      DOB: '',
      role: ''
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleFullNameChange}
          placeholder="Name"
          value={this.state.fullName}
        />
        <input
          type="date"
          onChange={this.handleDOBChange}
          placeholder="DOB"
          value={this.state.DOB}
        />
        <input
          type="text"
          onChange={this.handleRoleChange}
          placeholder="Role"
          value={this.state.role}
        />
        <button
          onClick={() => {
            this.props.createNewEmployee({
              fullName: this.state.fullName,
              DOB: this.state.DOB,
              role: this.state.role
            });
            this.clearForm();
          }}
        >Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNewEmployee: employee => dispatch(createNewEmployee(employee))
});

const NewEmployeeFormContainer = connect(
  null,
  mapDispatchToProps
)(NewEmployeeForm);

export default NewEmployeeFormContainer;
