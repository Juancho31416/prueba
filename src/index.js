import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import  Login  from "./containers/Login";
import Todo from "./containers/TodoList";



ReactDOM.render(
  <Login />,
  //<Todo />,
  document.getElementById('root')
 
);

if (module.hot) {
  module.hot.accept();
}