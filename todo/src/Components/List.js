import React from 'react';
import Item from './Item';

export default class List extends React.Component {
  state = {
    todoList: ['live', 'buy', 'consume', 'die']
  }

  render() {
    return (
      <div className='todoList'>
        {this.props.todoList.map((todo, idx) => {
          return (
            <p className='todo' key={todo + idx}>
              {todo.value}
            </p>
          );
        })}
      </div>
    );
  }
}