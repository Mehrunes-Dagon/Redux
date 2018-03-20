export const ADD_TODO = 'ADD_TODO';
export const MARK_TODO = 'MARK_TODO';

export const addTodo = () => {
  return { type: 'ADD_TODO' };
};
export const markTodo = () => {
  return { type: 'MARK_TODO' };
};