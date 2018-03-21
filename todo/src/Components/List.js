import React from 'react';
import { connect } from 'react-redux';
import { addTodo, markTodo } from '../Actions';
class List extends React.Component {

  render() {
    return (
      <div>
        <ul className='todoList'>
          {this.props.todoList.map((todo, idx) => {
            return (
              <li className='todoItem' key={todo + idx}>
                <div className='todoAction'>{todo.value}</div>
                <div onClick={(index) => this.props.markTodo(idx)} className='todoCheck'>{todo.checked ? '.' : 'X'}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoList: state
  };
};

export default connect(mapStateToProps, { addTodo, markTodo })(List);