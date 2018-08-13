import React , { Component } from "react";
import { render} from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Login from "./containers/Login";
import Todo  from "./containers/TodoList";

<Route path="/login" exact component={Login} />
<Route path="/Todo" exact component={Todo} />
