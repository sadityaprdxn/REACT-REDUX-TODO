import React, { useState , useEffect } from 'react';
import '../scss/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Todo from './Todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoListReducer from '../reducers/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(todoListReducer , devToolsEnhancer());

const App = () => {

  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
