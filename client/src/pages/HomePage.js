import React, { Component } from "react";
// import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

class HomePage extends Component {
//Might have to add parts from Home.js to the HomePage file...
    render(){
        return(
            <>
            <SignIn />
            <br />
            <br />
            <SignUp />
            </>
        );
    }
}

export default HomePage;