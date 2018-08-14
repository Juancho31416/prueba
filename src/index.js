
import ReactDOM from 'react-dom';

import  Login  from "./containers/Login";
import Todo from "./containers/TodoList";
import Register from "./containers/Register";
import WebFont from 'webfontloader';
import React, { Component } from 'react';
import { Switch ,Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Application from './containers/Application';
import store from './redux';



ReactDOM.render(
  
  <Provider store={store}>
     <Login /> 
  </Provider>,
document.getElementById('root')
 
);

<Router>
  <Route path="/todo" component={Todo}/>
</Router>


if (module.hot) {
  module.hot.accept();
}