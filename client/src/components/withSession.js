import React from 'react';

const withSession = Component => props => {
  return(
    <Component {...props} />
  )
};

export default withSession;