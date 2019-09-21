import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import BidBtn from "../components/BidBtn";

class Detail extends Component {
  state = {
    item: {},
    currentBidder: "",
    currentBid: ""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getItem(this.props.match.params.id)
      .then(res => this.setState({ item: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { currentBidder, value } = event.target;
    this.setState({
      [currentBidder]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-12">
        <h1 className= "item-detail-header">Item Detail - {this.state.item.name}</h1>
        </Col>
        </Row>
        <Row>
          <Col size="md-6">
          <img className= "item-detail-image" src= {this.state.item.image}/>
          </Col>
          <Col size="md-6">
              <p>{this.state.item.description}</p>
              <p> <strong>Current Bid:</strong> ${this.state.item.currentBid}</p>
              <p><strong>Current Bidder:</strong> {this.state.item.currentBidder}</p>
              <BidBtn />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Link to="/auction">← Back to Auction</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
