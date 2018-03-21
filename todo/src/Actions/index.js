export const ADD_TODO = 'ADD_TODO';
export const MARK_TODO = 'MARK_TODO';

export const addTodo = (newTodo) => {
  return {
    type: 'ADD_TODO',
    newTodo: newTodo
  };
};

export const markTodo = (idx) => {
  return {
    type: 'MARK_TODO',
    index: idx
  };
};