import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { configureFakeBackend } from "../helpers/fake-backend";
import { login } from '../redux/actions/auth';

import "./Login.css";
import Todo from "./TodoList";

  class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
          route:'Login',
          email: '',
          password: '',
          submitted: false,
          isLoggedIn:false

  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {

    return this.state.email.length > 0 && this.state.password.length > 0;

  }

  handleChange(e){

    let fieldName = e.target.id;
    let fieldVal = e.target.value;
    this.setState({ [fieldName]: fieldVal });
    
  }

  userLogin (e) {
    this.props.onLogin(this.state.email, this.state.password);
    e.preventDefault();
  }

  toggleRoute (e) {
    let alt = (this.state.route === 'Login') ? 'Todo' : 'Login';
    this.setState({ route: alt });
    e.preventDefault();
  }

  handleSubmit (e){ 
    e.preventDefault();
    
    this.state.submitted = true;
    this.state.isLoggedIn = true;
    
    const { email, password , isLoggedIn} = this.state;
   
    
  
    if (email && password) {
     let response = configureFakeBackend( this.state ,'Authenticate');
     console.log('respuesta', response);
    }
    this.toggleRoute(e);
   
  }

  toggleRoute (e) {
    let alt = (this.state.route === 'Login') ? 'Todo' : 'Todo';
    this.setState({ route: alt });
    e.preventDefault();
}
  
  render() {
   /*  if (this.state.isLoggedIn === true) {
      return <Redirect to={from ||'/Todo'} />
    } */
    let alt = (this.state.route === 'Login') ? 'Todo' : 'Login';
    const { email, password, submitted } = this.state;
    return (
       <div className="Login">
       <div className="LoginTitleClass" > Log-In </div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" name="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={email} 
              onChange={this.handleChange}
              
              
            />
          </FormGroup>
          <FormGroup controlId="password" name="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
            
              type="password"
              value={password}
              onChange={this.handleChange}
              
              
            />
          </FormGroup>
          <div >
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            
          >
            Login
          </Button>

          <Button
            block
            bsSize="large"
              
          >
            Register
          </Button>
          </div>
        </form>
      </div> 
    );
  }

}
 
const mapStateToProps = (state, ownProps) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogin: (email, password) => { dispatch(login(email, password)); },
      onSignUp: (email, password) => { dispatch(Todo(email, password)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login); 