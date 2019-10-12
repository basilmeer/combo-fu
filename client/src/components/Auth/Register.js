import React from 'react';
import { H2 } from '@blueprintjs/core';
import { Classes, FormGroup, InputGroup, Button } from '@blueprintjs/core';

class Register extends React.Component {
  render() {
    return(
      <div>
        <H2>Register</H2>
        <FormGroup
          helperText="No special characters"
          label="username"
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
    )
  }
}

export default Register;