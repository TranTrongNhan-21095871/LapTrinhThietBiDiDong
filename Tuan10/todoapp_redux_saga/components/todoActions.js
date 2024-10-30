// src/store/actions/todoActions.js
export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';

export const addTodoRequest = (todo) => ({
  type: ADD_TODO_REQUEST,
  payload: todo,
});

export const deleteTodoRequest = (id) => ({
  type: DELETE_TODO_REQUEST,
  payload: id,
});
