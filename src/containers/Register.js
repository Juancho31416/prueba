import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { configureFakeBackend } from "../helpers/fake-backend";
import "./Register.css";


export default class Register extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          
              email: '',
              password: '',
              submitted: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(e){

        let fieldName = e.target.id;
        let fieldVal = e.target.value;
        this.setState({ [fieldName]: fieldVal });
        
    }

    handleSubmit (e){ 
      e.preventDefault();
      
      this.setState({ submitted: true });
      const { username, password } = this.state;
     
  
      if (username && password) {
       let response = configureFakeBackend( this.state ,'Authenticate');
       console.log('respuesta', response);
      }
  
    
    }

    validateForm() {

        return this.state.email.length > 0 && this.state.password.length > 0;
    
    }


    render(){
        const { email, password, submitted } = this.state;
        return(
        <div className="Register">
        <div className="RegisterTitleClass">Register</div>
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
            Register
          </Button>
          </div>
        </form>
      </div> 
        );
    }

}