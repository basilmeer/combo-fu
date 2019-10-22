import React, { Component, Fragment } from 'react';
import { H2 } from '@blueprintjs/core';
import { Classes, FormGroup, InputGroup, Button } from '@blueprintjs/core';
import Sidebar from '../Sidebar';

class Register extends Component {
  render() {
    return(
      <Fragment>
        <Sidebar />
        <div className="cf-content container">
          <H2>Register</H2>
          <FormGroup
            helperText="No special characters"
            label="Username"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" type="text" />
          </FormGroup>
          <FormGroup
            helperText="e.g. hello@domainname.com"
            label="Email Address"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" type="email" />
          </FormGroup>
          <FormGroup
            label="Password"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" type="password" />
          </FormGroup>
          <FormGroup
            label="Confirm Password"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" type="password" />
          </FormGroup>
          <Button className={Classes.BUTTON} intent="primary">Register</Button>
        </div>
      </Fragment>
    )
  }
}

export default Register;