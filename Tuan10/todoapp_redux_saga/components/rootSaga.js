// src/store/sagas/rootSaga.js
import { all } from 'redux-saga/effects';
import { watchTodo } from './todoSaga';

export default function* rootSaga() {
  yield all([
    watchTodo(),
  ]);
}
