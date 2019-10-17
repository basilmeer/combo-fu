import React, { Component } from 'react';
import { H2, FormGroup, InputGroup, Button, Classes, Toast, Toaster, Position, Intent } from '@blueprintjs/core';
import AppToaster from '../AppToaster.js';
import axios from 'axios';

const initialState = {
  email: "",
  password: ""
}

class Signin extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  }

  toggleLoading = () => {
    const status = !this.state.loading;
    this.setState({ loading: status });
  }
  
  clearState = () => {
    this.setState({ ...initialState });
  }

  setCookie = (cookie_name, cookie_value, expiry) => {
    const date = new Date();
    date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
    const expires = "expires="+ date.toUTCString();
    document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
  }

  handleChange = e => {
    const { name, value }= e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    this.toggleLoading();
    axios.post('http://localhost:5000/login', { email, password })
      .then(res => {
        console.log(res);
        this.toggleLoading();
        this.setCookie("token", res.data.token, 1);
        AppToaster.show({ message: "Welcome back!", intent: Intent.SUCCESS });
      })
      .catch(err => {
        console.log(err);
        this.toggleLoading();
        AppToaster.show({ message: "Oops, an error occurred!", intent: Intent.DANGER });
      });
    this.clearState();
  }
  
  render() {
    return (
      <div>
        <Toaster>

        </Toaster>
        <H2>Login</H2>
        <form onSubmit={async (e) => await this.handleSubmit(e)}>
          <FormGroup
            helperText="e.g. hello@domainname.com"
            label="Email Address"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" name="email" value={this.state.email} type="email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup
            label="Password"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" name="password" value={this.state.password} type="password" onChange={this.handleChange} />
          </FormGroup>
          <Button type="submit" className={Classes.BUTTON} loading={this.state.loading} intent="success">Login</Button>
        </form>
      </div>);
  }
}

export default Signin;