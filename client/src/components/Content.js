import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { SessionConsumer } from './session-context';

import Home from './Home/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Logout from './Auth/Logout';
import Profile from './Profile/Profile';
import Settings from './Settings/Settings';
import Combos from './Combos/Combos';
import ComboPage from './Combos/ComboPage';

class Content extends Component {
  render() {
    return (
      <SessionConsumer>
        {({ session }) => {
          console.log(`Session: ${session}`);
          return(
            <div className="content">
              <Route path="/" exact component={(session) => <Home session={session} />} />
              <Route path="/login/" exact component={Login} />
              <Route path="/register/" exact component={Register} />
              <Route path="/logout/" exact component={Logout} />
              <Route path="/combos/" exact component={Combos} />
              <Route path="/combo/:id" exact component={ComboPage} />
              <Route path="/profile/" exact component={Profile} />
              <Route path="/settings/" exact component={Settings} />
              <Redirect to="/" />
            </div>
          )
        }}
      </SessionConsumer>
    );
  }
}

export default Content;