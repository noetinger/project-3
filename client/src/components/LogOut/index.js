//LogOut Component
import React, { Component } from 'react';
import 'whatwg-fetch';
import "./style.css";
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
    const token = getFromStorage('token');
    if (token !== '') {
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
    // const obj = getFromStorage('the_main_app');
    // if (obj && obj.token) {
    //   const { token } = obj;
    const token = getFromStorage('token');
    console.log(token)
    if (token !== '') {
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
            localStorage.removeItem('token');
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
      return (<div id= "load"><p>Loading...</p></div>);
    }

    return (
      <div id= "box">
        <p id="confirmText">Press the button below to confirm your logout</p>
        <button id="logOutBtn" onClick={this.logout}>Logout</button>
      </div> 
    );
  }
}

export default LogOut;