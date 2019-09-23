import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import BidBtn from "../components/BidBtn";

class Detail extends Component {
  state = {
    item: {},
    currentBidder: "",
    currentBid: "",
    token: ""
  };

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
        <h1 className= "item-detail-header">Item Detail - {this.state.item.name} {this.state.item.description}</h1>
          <img className= "item-detail-image" src= {this.state.item.image}/>
              <p className= "item-detail-header"><strong>Current Bid:</strong> ${this.state.item.currentBid}</p>
              <p className= "item-detail-header"><strong>Current Bidder:</strong> {this.state.item.currentBidder}</p>
              <div className= "item-detail-header"> <BidBtn /> </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <div className= "item-detail-header"> <Link to="/auction">← Back to Auction</Link></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
