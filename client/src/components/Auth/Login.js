import React, { Component } from 'react';
import { H2, FormGroup, InputGroup, Button, Classes } from '@blueprintjs/core';
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
        this.toggleLoading();
        console.log(res);
      })
      .catch(err => {
        this.toggleLoading();
        console.log(err);
      });
    this.clearState();
  }
  
  render() {
    return (
      <div>
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