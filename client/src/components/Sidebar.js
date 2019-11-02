import React from 'react';
import { Icon, Intent } from '@blueprintjs/core';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';
import AppToaster from './AppToaster';
import { SessionConsumer } from './session-context';

const handleLogout = (toastMessage, updateSession) => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  updateSession();
  AppToaster.show({ message: toastMessage, intent: Intent.WARNING });
}

const AuthSidebar = ({ session, updateSession }) => {
  return(
    <div className="cf-sidebar">
      <div className="cf-sidebar-title">Combo-Fu</div>
      <div className="cf-sidebar-welcome">Hi there, {session.username}!</div>
      <div className="cf-sidebar-nav-menu">
        <NavLink exact={true} activeClassName="active" to="/">
          <Icon className="cf-sidebar-menu-icon" icon="home" />
          Home
        </NavLink>
        <NavLink exact={true} activeClassName="active" to="/combos/">
          <Icon className="cf-sidebar-menu-icon" icon="comment" />
          Combos
        </NavLink>
        <NavLink exact={true} activeClassName="active" to="/profile/">
          <Icon className="cf-sidebar-menu-icon" icon="user" />
          Profile
        </NavLink>
        {/* <NavLink exact={true} activeClassName="active" to="/settings/">
          <Icon className="cf-sidebar-menu-icon" icon="cog" />
          Settings
        </NavLink> */}
        <NavLink activeClassName="" onClick={() => handleLogout("See ya later!", updateSession)} to="/logout/">
          <Icon className="cf-sidebar-menu-icon" icon="log-out" />
          Logout
        </NavLink>
      </div>
      <div className="cf-footer-note">&copy; 2019 <a href="https://www.basilmeer.com">Basil Meer</a>. <br />Made with ❤️ for the FGC.</div>
    </div>
  )
}

const UnauthSidebar = () => {
  return(
    <div className="cf-sidebar">
      <div className="cf-sidebar-title">Combo-Fu</div>
      <div className="cf-sidebar-welcome">Hi there, Guest!</div>
      <div className="cf-sidebar-nav-menu">
        <NavLink exact={true} activeClassName="active" to="/">
          <Icon className="cf-sidebar-menu-icon" icon="home" />
          Home
        </NavLink>
        <NavLink exact={true} activeClassName="active" to="/combos/">
          <Icon className="cf-sidebar-menu-icon" icon="comment" />
          Combos
        </NavLink>
        <NavLink exact={true} activeClassName="active" to="/login/">
          <Icon className="cf-sidebar-menu-icon" icon="log-in" />
          Login
        </NavLink>
        <NavLink exact={true} activeClassName="active" to="/register/">
          <Icon className="cf-sidebar-menu-icon" icon="person" />
          Register
        </NavLink>
      </div>
      <div className="cf-footer-note">&copy; 2019 <a href="https://www.basilmeer.com">Basil Meer</a>. <br />Made with ❤️ for the FGC.</div>
    </div>
  )
}

const Sidebar = () => {
  return(
    <SessionConsumer>
      {({ session, updateSession }) => {
        if(session) return <AuthSidebar session={session} updateSession={updateSession} />;
        return <UnauthSidebar />;
      }}
    </SessionConsumer>
  )
}

// const cont = this.context;

// class Sidebar extends Component {
//   render() {
//     // console.log(cont);
//     return(
//       <div>
//         {session && session.username ? <AuthSidebar session={session} /> : <UnauthSidebar />}
//       </div>
//     )
//   }
// }

export default Sidebar;