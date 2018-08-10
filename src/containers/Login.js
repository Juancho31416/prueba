import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {


    
  }

  handleChange(){event => {
  }
}

  handleSubmit (){ event => {
  
  }
  }
  
  render() {
    return (
       <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
            
              
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
            
              type="password"
            />
          </FormGroup>
          <div >
          <Button
            block
            bsSize="large"
            //disabled={!this.validateForm()}
            type="submit"
            
          >
            Login
          </Button>
          </div>
        </form>
      </div> 
    );
  }
}