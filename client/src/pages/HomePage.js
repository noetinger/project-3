//"Homepage" for Signing into user account. 

import React, { Component } from "react";
// import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import "../App.css"

class HomePage extends Component {
//Might have to add parts from Home.js to the HomePage file...
    render(){
        return(
            <Container fluid>
        <Row>
            <br></br>
        </Row>
        <Row>
        <Col size="md-4 sm-12">

            </Col>
        <Col size="md-4 sm-12">
            <SignIn />
            </Col>
            <Col size="md-4 sm-12">
            </Col>
            </Row>
            <Row>
            <br></br>
        </Row>
            <Row>
            </Row>
            </Container>
        );
    }
}

export default HomePage;