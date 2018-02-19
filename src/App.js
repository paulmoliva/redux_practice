import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import EmployeesContainer from './components/employees/employees_container';

const initialState = {
  employees: {}
};

const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <EmployeesContainer />
      </Provider>
    );
  }
}

export default App;
