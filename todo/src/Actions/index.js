export const ADD_TODO = 'ADD_TODO';
export const MARK_TODO = 'MARK_TODO';

export const addTodo = (newDo) => {
  return {
    type: 'ADD_TODO',
    newTodo: newDo
  };
};

export const markTodo = () => {
  return {
    type: 'MARK_TODO',
    index: 1
  };
};