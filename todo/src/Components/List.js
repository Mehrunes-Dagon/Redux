import React from 'react';

export default class List extends React.Component {
  state = {
    todos: [];
  }

  componentDidMount() {

  }

  addTodo() {

  }

  render() {
    <div class='todoList'>
      {this.props.todos.map((todo) => {
        return (
          <div className='todo' key={todo}>
            {todo}
          </div>
        );
      })}
    </div>
  }
}