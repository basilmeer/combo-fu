import React, { Component, createContext } from 'react';
import jwt from 'jsonwebtoken';

const authData = () => {
  const tokenCookie = decodeURIComponent(document.cookie).split('=')[1];
  const decodedToken = jwt.decode(tokenCookie);
  return decodedToken;
}

const SessionContext = createContext({
  session: "",
  updateSession: () => {}
})

export class SessionProvider extends Component {
  updateSession = newSession => {
    this.setState({ session: newSession })
  };

  state = {
    session: 'session',
    updateSession: this.updateSession
  };

  componentDidMount= () => {
    this.setState({ session: authData() });
  }

  render() {
    return(
      <SessionContext.Provider value={this.state}>
        {this.props.children}
      </SessionContext.Provider>
    )
  }
}

export const SessionConsumer = SessionContext.Consumer;