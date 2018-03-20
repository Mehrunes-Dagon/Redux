import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Form from './Components/Form.js';
import List from './Components/List.js';

class App extends Component {
  state = {
    todoList: []
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List:</h1>
        <List />
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state
  };
};

export default connect(mapStateToProps, { addTodo, markTodo })(App);
