import React, { Component, Fragment } from 'react';
import { H2 } from '@blueprintjs/core';
import { Classes, Intent, FormGroup, InputGroup, Button } from '@blueprintjs/core';
import Sidebar from '../Sidebar';
import AppToaster from '../AppToaster.js';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { SessionConsumer } from '../session-context';

const initialState = {
  username: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  discord: "",
  platforms: []
}

class Register extends Component {
  state = {
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    discord: "",
    platforms: [],
    loading: false
  }

  clearState = () => {
    this.setState({ ...initialState });
  }
  
  toggleLoading = () => {
    const status = !this.state.loading;
    this.setState({ loading: status });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleClick = (item) => {
    console.log('click');
    this.state.platforms.push(item)
  }

  setCookie = (cookie_name, cookie_value, expiry) => {
    const date = new Date();
    date.setTime(date.getTime() + (expiry * 60 * 60 * 1000));
    const expires = "expires="+ date.toUTCString();
    document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
  }

/*   validateForm = () => {
    const { username, name, email, password, confirmPassword, discord } = this.state;

    const isInvalid = !username || !name || !email || !password || password !== confirmPassword || !discord;

    return isInvalid;
  } */

/*   validateFormData = () => {
    const { username, email, password, confirmPassword } = this.state;

    let isUsernameValid = true, isEmailValid = true, isPasswordValid = true;
    
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
    const usernameRegex = /^[a-z0-9_-]{3,16}$/igm;
  
    if (username && !usernameRegex.test(username)) {
      if(username.length < 5) {
        AppToaster.show({ message: "The username needs to be a bit longer!", intent: Intent.DANGER })
        isUsernameValid = false;
      }
      AppToaster.show({ message: "The username looks a bit funny.", intent: Intent.DANGER });
      isUsernameValid = false;
    }
    
    if (email && !emailRegex.test(email)) {
      AppToaster.show({ message: "The email looks a little funny.", intent: Intent.DANGER });
      isEmailValid = false;
    }

    if (password && password.length < 6) {
      if (password !== confirmPassword) {
        AppToaster.show({ message: "The password in both fields needs to be the same.", intent: Intent.DANGER });
        isPasswordValid = false;
      } else {
        AppToaster.show({ message: "The password needs to be longer than 6 characters!", intent: Intent.DANGER });
        isPasswordValid = false;
      }
    }
    // this.toggleLoading();
    console.log(isUsernameValid && isEmailValid && isPasswordValid);
    return isUsernameValid && isEmailValid && isPasswordValid;
  } */

  handleSubmit = (e, updateSession) => {
    e.preventDefault();
    
    /* Form Data Validation */
    const { username, email, password, confirmPassword } = this.state;

    let isUsernameValid = true, isEmailValid = true, isPasswordValid = true;
    
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
    const usernameRegex = /^[a-z0-9_-]{3,16}$/igm;
  
    if (username && !usernameRegex.test(username)) {
      if(username.length < 5) {
        AppToaster.show({ message: "The username needs to be a bit longer!", intent: Intent.DANGER })
        isUsernameValid = false;
      }
      AppToaster.show({ message: "The username looks a bit funny.", intent: Intent.DANGER });
      isUsernameValid = false;
    }
    
    if (email && !emailRegex.test(email)) {
      AppToaster.show({ message: "The email looks a little funny.", intent: Intent.DANGER });
      isEmailValid = false;
    }

    if (password && password.length < 6) {
      if (password !== confirmPassword) {
        AppToaster.show({ message: "The password in both fields needs to be the same.", intent: Intent.DANGER });
        isPasswordValid = false;
      } else {
        AppToaster.show({ message: "The password needs to be longer than 6 characters!", intent: Intent.DANGER });
        isPasswordValid = false;
      }
    }
    
    /* Form Submission */
    if(isUsernameValid && isEmailValid && isPasswordValid) {
      const { username, name, email, password, confirmPassword, discord } = this.state;
      this.toggleLoading();
      axios.post('/register', { username, name, email, password, confirmPassword, discord })
        .then(res => {
          console.log(res);
          this.toggleLoading();
          this.setCookie("token", res.data.token, 1);
          updateSession(jwt.decode(decodeURIComponent(document.cookie).split('=')[1]));
          AppToaster.show({ message: "Welcome to Combo-Fu!", intent: Intent.SUCCESS });
          this.props.history.push('/');
        })
        .catch(err => {
          console.log(err.response);
          this.toggleLoading();
          switch(err.response.status) {
            case 409:
              AppToaster.show({ message: "Woah there, this user already exists.", intent: Intent.DANGER });
              break;
            case 500:
                AppToaster.show({ message: "Oops, something went wrong!", intent: Intent.DANGER });
                break;
            default:
                AppToaster.show({ message: "Oops, an error occurred!", intent: Intent.DANGER });
                break;
          }
        });
      // this.clearState();
    }
  }
  
  render() {
    return(
      <Fragment>
        <Sidebar />
        <SessionConsumer>
          {({ updateSession }) => {
            return(
              <div className="cf-content container">
                <H2>Register</H2>
                <form onSubmit={async (e) => await this.handleSubmit(e, updateSession)}>
                  <FormGroup
                    helperText="No special charactersand it needs to be longer than 5 characters"
                    label="Username"
                    labelFor="username-input"
                    labelInfo="(required)"
                  >
                    <InputGroup id="username-input" type="text" name="username" onChange={this.handleChange}  />
                  </FormGroup>
                  <FormGroup
                    helperText="Your name"
                    label="Name"
                    labelFor="name-input"
                  >
                    <InputGroup id="name-input" type="text" name="name" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup
                    helperText="e.g. hello@domainname.com"
                    label="Email Address"
                    labelFor="email-input"
                    labelInfo="(required)"
                  >
                    <InputGroup id="email-input" type="email" name="email" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup
                    helperText="Make sure it's longer than 6 characters!"
                    label="Password"
                    labelFor="password-input"
                    labelInfo="(required)"
                  >
                    <InputGroup id="password-input" type="password" name="password" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup
                    label="Confirm Password"
                    labelFor="confirm-password-input"
                    labelInfo="(required)"
                  >
                    <InputGroup id="confirm-password-input" type="password" name="confirmPassword" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup
                    helperText="e.g. YaBoi#0123"
                    label="Discord"
                    labelFor="discord-input"
                  >
                    <InputGroup id="discord-input" type="text" name="discord" onChange={this.handleChange} />
                  </FormGroup>
                  <Button type="submit" className={Classes.BUTTON} loading={this.state.loading} intent="primary">Register</Button>
                </form>
              </div>
            )
          }}
        </SessionConsumer>
      </Fragment>
    )
  }
}

export default Register;