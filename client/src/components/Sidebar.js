import React, { Component } from 'react';
import { Icon } from '@blueprintjs/core';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return(
      <div className="cf-sidebar">
        <div className="cf-sidebar-title">Combo-Fu</div>
        {/* <MenuDivider /> */}
        <div className="cf-sidebar-welcome">Hi there, Bagul!</div>
        <div className="cf-sidebar-nav-menu">
          <NavLink exact={true} activeClassName="active" to="/">
            <Icon className="cf-sidebar-menu-icon" icon="home" />
            Home
          </NavLink>
          <NavLink exact={true} activeClassName="active" to="/combos/">
            <Icon className="cf-sidebar-menu-icon" icon="comment" />
            Combos
          </NavLink>
          {/* Show the following links only when the user is not logged in */}
          <NavLink exact={true} activeClassName="active" to="/login/">
            <Icon className="cf-sidebar-menu-icon" icon="log-in" />
            Login
          </NavLink>
          <NavLink exact={true} activeClassName="active" to="/register/">
            <Icon className="cf-sidebar-menu-icon" icon="person" />
            Register
          </NavLink>
          <NavLink exact={true} activeClassName="active" to="/profile/">
            <Icon className="cf-sidebar-menu-icon" icon="user" />
            Profile
          </NavLink>
          <NavLink exact={true} activeClassName="active" to="/settings/">
            <Icon className="cf-sidebar-menu-icon" icon="cog" />
            Settings
          </NavLink>
          <NavLink exact={true} activeClassName="active" to="/logout/">
            <Icon className="cf-sidebar-menu-icon" icon="log-out" />
            Logout
          </NavLink>
        </div>
        <div className="cf-footer-note">&copy; 2019 <a href="https://www.basilmeer.com">Basil Meer</a>. <br />Made with ❤️ for the FGC.</div>
      </div>
    )
  }
}

export default Sidebar;