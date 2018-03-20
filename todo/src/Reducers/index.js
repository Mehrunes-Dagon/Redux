import { ADD_TODO, MARK_TODO } from '../Actions';

export default (todoList = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // add function
      return;
    case MARK_TODO:
      // add function
      return;
    default:
      return todoList;
  }
};