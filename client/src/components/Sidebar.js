import React from 'react';
import { H2, Menu, MenuDivider, MenuItem, Icon, Intent } from '@blueprintjs/core';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return(
      <div className="cf-sidebar">
        <span className="cf-sidebar-title">Combo-Fu</span>
        {/* <MenuDivider /> */}
        <Menu>
          <NavLink activeClassName={Intent.PRIMARY} to="/">
            <MenuItem text="Home" icon="home" />
          </NavLink>
          <NavLink activeClassName={Intent.PRIMARY} to="/combos/">
            <MenuItem text="Combos" icon="comment" />
          </NavLink>
          <NavLink activeClassName={Intent.PRIMARY} to="/profile/">
            <MenuItem text="Profile" icon="user" />
          </NavLink>
          <NavLink activeClassName={Intent.PRIMARY} to="/explore/">
            <MenuItem text="Explore" icon="geosearch" />
          </NavLink>
          <NavLink activeClassName={Intent.PRIMARY} to="/login/">
            <MenuItem text="Login" icon="log-in" />
          </NavLink>
          <NavLink activeClassName={Intent.PRIMARY} to="/register/">
            <MenuItem text="Register" icon="person" />
          </NavLink>
          <NavLink activeClassName={Intent.PRIMARY} to="/logout/">
            <MenuItem text="Logout" icon="log-out" />
          </NavLink>
        </Menu>
        <div className="cf-footer-note">&copy; 2019 <a href="https://www.basilmeer.com">Basil Meer</a>. <br />Made with ❤️ for the FGC.</div>
      </div>
    )
  }
}

export default Sidebar;