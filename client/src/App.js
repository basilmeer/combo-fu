import React, { Component } from 'react';
import './App.scss';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/docs-theme/lib/css/docs-theme.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import jwt from 'jsonwebtoken';
import Content from './components/Content';
import { SessionProvider } from './components/session-context';

function authData() {
  const tokenCookie = decodeURIComponent(document.cookie).split('=')[1];
  const decodedToken = jwt.decode(tokenCookie);
  return decodedToken;
}

const sessionData = jwt.decode(decodeURIComponent(document.cookie).split('=')[1]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: authData()
    }
  }

  componentDidMount = () => {
    this.setState({ session: authData() })
  }

  render() {
    return (
      <div className="App">
        <SessionProvider value={sessionData}>
          <Router>
            <Switch>
              <Content />
            </Switch>
          </Router>
        </SessionProvider>
      </div>
    );
  }
}

export default App;
