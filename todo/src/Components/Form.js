import React from 'react';

export default class Form extends React.Component {
  state = {
    newTodo: '',
    todoList: []
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.addTodo}>
          <input type='text' placeHolder='Add Todo' onchange={this.getTodo} value={this.state.newTodo} />
        </form>
      </div>
    );
  }

  getTodo(event) {
    this.state.newTodo = event.target.value;
  }

  addTodo() {

  }
}