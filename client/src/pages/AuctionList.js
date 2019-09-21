//Page for all the auction list items available to bid on.
import React, { Component } from "react";
import BidBtn from "../components/BidBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class AuctionItems extends Component {
  state = {
    items: [],
    name: "",
    currentBidder: ""
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data})
      )
      .catch(err => console.log(err));
  };

  saveItem = id => {
    API.saveItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveItem({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Auction Items</h1>
            </Jumbotron>
            </ Col>
        </ Row>
            {this.state.items.length ? (
              <List>
                <div className="row">
                {this.state.items.map(auctionitem => (
                  <ListItem key={auctionitem._id}>
                    <Link to={"/auction/" + auctionitem._id}>
                      <strong>
                        <h4>{auctionitem.name} {auctionitem.description}</h4>
                        <p><img src= {auctionitem.image}/></p>
                        <h5>Current Bid: ${auctionitem.currentBid}</h5>
                        <h5>Current Bidder: {auctionitem.currentBidder}</h5>
                        <h5>Retail Value: ${auctionitem.retailValue}</h5>
                      </strong>
                    </Link>
                  </ListItem>
                ))}
                </div>
              </ List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </Container>
    );
  }
}

export default AuctionItems;
