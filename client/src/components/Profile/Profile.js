import React, { Component, Fragment } from 'react';
import { H2, H5, Classes, Button } from '@blueprintjs/core';
import Sidebar from '../Sidebar';

class Profile extends Component {
  state = {
    "username": "bagulthebear",
    "name": "Basil Meer",
    "email": "basilmeer@gmail.com",
    "created_at": "15 October 2019"
  }
  
  render() {
    return(
      <Fragment>
        <Sidebar />
        <div className="cf-content container">
          <div className="page-heading">
            <H2>Profile</H2>
            <Button className={Classes.PRIMARY}>Edit profile</Button>
          </div>
          <H5><strong>Name:</strong> {this.state.name}</H5>
          <H5><strong>Username:</strong> {this.state.username}</H5>
          <H5><strong>Email:</strong> {this.state.email}</H5>
          <H5><strong>Joined:</strong> {this.state.created_at}</H5>
          <H5><strong>Posted Combos:</strong></H5>
          <H5><strong>Saved Combos:</strong></H5>
        </div>
      </Fragment>
    )
  }
}

export default Profile;