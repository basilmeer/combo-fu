import React from 'react';
import { H2 } from '@blueprintjs/core';
import Sidebar from '../Sidebar';

class Settings extends React.Component {
  render() {
    return(
      <div>
        <Sidebar />
        <div className="cf-content container">
          <H2>Settings</H2>
        </div>
      </div>
    )
  }
}

export default Settings;