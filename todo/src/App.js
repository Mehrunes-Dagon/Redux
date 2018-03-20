import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Input, Item, List } from './Components';

class App extends Component {
  state = {
    todos: [];
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List:</h1>
        <

      </div>
      );
    }
  }
  
const mapStateToProps = (state) => {
  return {
          todoList: state
      };
    };
    
export default connect(mapStateToProps, {
          //add functions
        })(App);
