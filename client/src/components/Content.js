import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Profile from './Profile/Profile';
import Explore from './Explore/Explore';
import Combos from './Combos/Combos';

class Content extends React.Component {
  render() { 
    return (
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/login/" exact component={Login} />
        <Route path="/register/" exact component={Register} />
        <Route path="/combos/" exact component={Combos} />
        <Route path="/profile/" exact component={Profile} />
        <Route path="/explore/" exact component={Explore} />
      </div>
    );
  }
}

export default Content;