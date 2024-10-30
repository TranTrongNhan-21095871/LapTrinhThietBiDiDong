// src/store/sagas/todoSaga.js
import { takeEvery, put } from 'redux-saga/effects';
import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
} from './todoActions';

function* addTodoSaga(action) {
  const todo = { id: Date.now(), ...action.payload };
  yield put({ type: ADD_TODO_SUCCESS, payload: todo });
}

function* deleteTodoSaga(action) {
  yield put({ type: DELETE_TODO_SUCCESS, payload: action.payload });
}

export function* watchTodo() {
  yield takeEvery(ADD_TODO_REQUEST, addTodoSaga);
  yield takeEvery(DELETE_TODO_REQUEST, deleteTodoSaga);
}
