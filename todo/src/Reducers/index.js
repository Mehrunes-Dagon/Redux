import { ADD_TODO, MARK_TODO } from '../Actions';

const initState = [
  { value: 'die', checked: false },
  { value: 'live', checked: true }
];

export default (todoList = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // todoList.push(action.newTodo);
      // return todoList;
      return [...todoList, { value: action.newTodo }];
    case MARK_TODO:
      todoList[action.index].checked = !todoList[action.index].checked;
      return todoList;
    default:
      return todoList;
  }
};