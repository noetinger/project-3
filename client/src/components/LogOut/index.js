//LogOut Component
import React, { Component } from 'react';
import 'whatwg-fetch';

import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';

class LogOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
    };

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  logout() {
    console.log("Logout Button Pressed")
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false
            });
            //Delete Token from Local Storage
            localStorage.removeItem("the_main_app");
            //Go back to HomePage
            window.location.pathname = '/';
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
      token,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    return (
      <div>
        <p>Press the button below to confirm your logout</p>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default LogOut;