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
      // signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      // signUpEmail: '',
      // signUpPassword: '',
      // signUpFirstName: '',
      // SignUpLastName: '',
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    // this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    // this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);

    // this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    // this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
    
    this.onSignIn = this.onSignIn.bind(this);
    // this.onSignUp = this.onSignUp.bind(this);
    // this.logout = this.logout.bind(this);
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

  // onTextboxChangeSignUpEmail(event) {
  //   this.setState({
  //     signUpEmail: event.target.value,
  //   });
  // }

  // onTextboxChangeSignUpPassword(event) {
  //   this.setState({
  //     signUpPassword: event.target.value,
  //   });
  // }

  // onTextboxChangeSignUpFirstName(event) {
  //   this.setState({
  //     signUpFirstName: event.target.value,
  //   });
  // }

  // onTextboxChangeSignUpLastName(event) {
  //   this.setState({
  //     SignUpLastName: event.target.value,
  //   });
  // }

  // onSignUp() {
  //   // Grab state
  //   const {
  //     signUpFirstName,
  //     SignUpLastName,
  //     signUpEmail,
  //     signUpPassword,
  //   } = this.state;

  //   this.setState({
  //     isLoading: true,
  //   });

  //   // Post request to backend
  //   fetch('/api/account/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       firstName: signUpFirstName,
  //       lastName: SignUpLastName,
  //       email: signUpEmail,
  //       password: signUpPassword,
  //     }),
  //   }).then(res => res.json())
  //     .then(json => {
  //       console.log('json', json);
  //       if (json.success) {
  //          //Redirect to auction list on success
  //           window.location.pathname = '/auction';
  //         // this.setState({
  //         //   signUpError: json.message,
  //         //   isLoading: false,
  //         //   signUpFirstName: '',
  //         //   SignUpLastName: '',
  //         //   signUpEmail: '',
  //         //   signUpPassword: '',
  //         // })
  //       } else {
  //         this.setState({
  //           signUpError: json.message,
  //           isLoading: false,
  //         });
  //       }
  //     });
  // }

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
          setInStorage('the_main_app', { token: json.token });
          //Redirect to auction list on success
          window.location.pathname = '/auction';
          // this.setState({
          //   signInError: json.message,
          //   isLoading: false,
          //   signInPassword: '',
          //   signInEmail: '',
          //   token: json.token,
          // });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  // logout() {
  //   this.setState({
  //     isLoading: true,
  //   });
  //   const obj = getFromStorage('the_main_app');
  //   if (obj && obj.token) {
  //     const { token } = obj;
  //     // Verify token
  //     fetch('/api/account/logout?token=' + token)
  //       .then(res => res.json())
  //       .then(json => {
  //         if (json.success) {
  //           this.setState({
  //             token: '',
  //             isLoading: false
  //           });
  //         } else {
  //           this.setState({
  //             isLoading: false,
  //           });
  //         }
  //       });
  //   } else {
  //     this.setState({
  //       isLoading: false,
  //     });
  //   }
  // }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      // signUpFirstName,
      // SignUpLastName,
      // signUpEmail,
      // signUpPassword,
      // signUpError,
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
          {/* <br />
          <br />
          <div>
            {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)
            }
            <p>Sign Up</p>
            <input
              type="string"
              placeholder="First Name"
              value={signUpFirstName}
              onChange={this.onTextboxChangeSignUpFirstName}
            /><br />
            <input
              type="string"
              placeholder="Last Name"
              value={SignUpLastName}
              onChange={this.onTextboxChangeSignUpLastName}
            /><br />
            <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}
            /><br />
            <input
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={this.onTextboxChangeSignUpPassword}
            /><br />
            <button onClick={this.onSignUp}>Sign Up</button>
          </div> */}
          <br></br>
       <p className="noaccount">Don't have an account? <a href="">Click Here</a> to sign up!</p>
        </div>
      );
    }

    // return (
    //   <div>
    //     <p>Press the button below to confirm your logout</p>
    //     <button onClick={this.logout}>Logout</button>
    //   </div>
    // );
  }
}

export default SignIn;