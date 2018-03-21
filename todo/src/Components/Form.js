import React from 'react';
import { connect } from 'react-redux';
import { addTodo, markTodo } from '../Actions';
class Form extends React.Component {
  state = {
    newTodo: ''
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.submitter}>
          <input type='text' placeholder='Add Todo' onChange={this.getTodo} value={this.state.newTodo} />
        </form>
        <button onClick={this.submitter}>Submit</button>
      </div>
    );
  }

  getTodo = (event) => {
    this.setState({
      newTodo: event.target.value
    });
  };

  submitter = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ''
    });
  };

}

const mapStateToProps = state => {
  return {
    todoList: state
  };
};

export default connect(mapStateToProps, { addTodo, markTodo })(Form);