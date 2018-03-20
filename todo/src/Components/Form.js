import React from 'react';
import { addTodo, markTodo } from '../Actions';
export default class Form extends React.Component {
  state = {
    newTodo: ''
  };

  render() {
    return (
      <div className='form'>
        {console.log(this.props.addTodo)}
        <form onSubmit={(newDO) => this.props.addTodo(this.state.newTodo)}>
          <input type='text' placeholder='Add Todo' onChange={this.getTodo} value={this.state.newTodo} />
        </form>
      </div>
    );
  }

  getTodo = (event) => {
    this.setState({
      newTodo: event.target.value
    });
  };



}