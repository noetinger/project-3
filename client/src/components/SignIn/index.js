//Sign In Component
import React, { Component } from 'react';
import 'whatwg-fetch';
import "./style.css";
import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      token: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
    };
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
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
  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }
  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }
  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;
    this.setState({
      isLoading: true,
    });
    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('token', json.token);
          //Redirect to auction list on success
          window.location.pathname = '/auction';
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }
  toAuctionList(){
    //Redirect to auction list on success
    window.location.pathname = '/auction';
  }
  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
    } = this.state;
    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }
    if (!token) {
      return (
        <div className="signin">
          <div>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
            <p>Have an account already? Sign in!</p>
            <input className="inputfields"
              type="email"
              placeholder="Email"
              value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword}
            />
            <br />
            <br />
            <button className="signinbtn" onClick={this.onSignIn}>Sign In</button>
          </div>
          <br></br>
       <p className="noaccount">Don't have an account? <a href="/SignUp">Click Here</a> to sign up!</p>
        </div>
      );
    } else {
      //If token is already created, go right to auctionList
      this.toAuctionList()
    }
  }
}
export default SignIn;