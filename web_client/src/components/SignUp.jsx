import React from "react";

import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./cssComponents/SignUp.css";
import API from '../api/connection';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username : "",
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.username.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    var _send = {
        username : this.state.username,
        email: this.state.email,
        password: this.state.password
    }
    API.signup(_send).then(function(data){
        window.location = "/login"
    },function(error){
        console.log(error);
        return;
    })
  }

  render() {
    return (
      <div className="Login">
        <form>

        <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Pseudo</ControlLabel>
            <FormControl autoFocus type="username" value={this.state.username} onChange={this.handleChange} /> </FormGroup>

          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
              <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} /> </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
          </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm()} onClick={this.handleSubmit}> SignUp </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;