import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import axios from "axios";
import 'whatwg-fetch';
//on click disable button, set a timeout in a global varible, use boolean

class Detail extends Component {
  state = {
    item: {},
    id: "",
    condition: "",
    bidIncrement: "",
    currentBidder: "",
    currentBid: ""
  };

  buttonClicked = event => {
    const getToken = localStorage.getItem('token');
    const userID = getToken.split(".");
    const name = (userID[1] + " " + userID[2]);
    let newBid = "";
    this.setState({
      currentBidder: name,
      currentBid: newBid
    });
    fetch('/api/auctionitems/'+ this.props.match.params.id, {
      method: 'PUT',
      headers: {
      'Content-Type': 'application/json'
    }
    })
    .then(res => console.log(res))
    // need to update database
    
    // this.item.state.currentBidder = this.state.currentBidder;
    console.log('Button was clicked!')
    console.log(userID[1],userID[2]);
    console.log('this is:', this);
  }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    // When this component mounts, grab the item with the _id of this.props.match.params.id
    // e.g. localhost:3000/auctionitems/599dcb67f0f16317844583fc
    componentDidMount() {
      API.getItem(this.props.match.params.id)
        .then(res => this.setState({ item: res.data }))
        .catch(err => console.log(err));
    }
  
    setBidder() {
      API.getCurrentBidder()
        .then(res => this.setState({ currentBidder: res.data }))
        .catch(err => console.log(err));
    }

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-12">
        <h1 className= "item-detail-header">Item #{this.state.item.id} - {this.state.item.name} {this.state.item.description}</h1>
          <img className= "item-detail-image" src= {this.state.item.image}/>
          <p className= "item-detail-header"><strong>Item Condition:</strong> {this.state.item.condition}</p>
              <p className= "item-detail-header"><strong>Current Bid:</strong> ${this.state.item.currentBid}</p>
              <p className= "item-detail-header"><strong>Bid Increment:</strong> ${this.state.item.bidIncrement}</p>
              <p className= "item-detail-header"><strong>Current Bidder:</strong> {this.state.currentBidder}</p>
              <div className= "item-detail-header">
            <button onClick={this.buttonClicked}>Bid Now!</button>
        </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col size="md-12">
          <div className= "item-detail-header"> <Link to="/auction">← Back to Auction</Link></div>
          </Col>
        </Row>
      </Container>
    );
  };
}


export default Detail;
