// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
