import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = conditionFunc => Component => props => {
  return class extends React.Component {
    render() {
      return(
        conditionFunc() ? <Component {...props} /> : <Redirect to="/" />
      )
    }
  }
}

export default withAuth;