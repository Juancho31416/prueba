
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import  Login  from "./containers/Login";
import Todo from "./containers/TodoList";
import Register from "./containers/Register";
import WebFont from 'webfontloader';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Application from './containers/Application';
import store from './redux';



ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
document.getElementById('root')
 
);


if (module.hot) {
  module.hot.accept();
}