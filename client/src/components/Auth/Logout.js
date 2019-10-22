import React from 'react';
import { H2 } from '@blueprintjs/core';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

class Logout extends React.Component {
  render() { 
    return(
      <Redirect to="/" />
    );
  }
}
 
export default Logout;