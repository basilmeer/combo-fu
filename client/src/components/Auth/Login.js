import React from 'react';
import { H2, FormGroup, InputGroup, Button, Classes } from '@blueprintjs/core';

class Signin extends React.Component {
  render() {
    return (
      <div>
        <H2>Login</H2>
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
        <Button className={Classes.BUTTON} intent="success">Login</Button>
      </div>);
  }
}

export default Signin;