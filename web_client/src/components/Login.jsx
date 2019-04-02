import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import "./cssComponents/Login.css";
import API from '../api/connection';
import Facebook from "./FacebookLogin";
import Google from "./GoogleLogin";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username : "",
      password: ""
    };
  }

  validateForm() {
    return this.state.password.length > 0 && this.state.username.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  async handleSubmit() {
    const data = await API.login(this.state.password, this.state.username);
    console.log(data);
    await localStorage.setItem('token', data.data.token);
    window.location = "/area" + this.state.username;
  }

  render() {
    return (
      <div className="Login">
        <form>
        <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Pseudo</ControlLabel>
            <FormControl autoFocus type="username" value={this.state.username} onChange={this.handleChange} /> </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password"/> </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm()} onClick={() => this.handleSubmit()}> Login </Button>
          <br></br>
          <Facebook/>
          <br></br>
          <Google/>
        </form>
      </div>
    );
  }
}

export default Login;