import React from "react";
import "./style.css";
import { Col, Row, Container } from "..//Grid";


// This file exports both the List and ListItem components
//List is the whole container that all the items are in
export function List({ children }) {
  return (
    <div className= "auction-items"> {children} </div>
  );
}

//List item is each individual
export function ListItem({ children }) {
  return (
  <Col size="md-4"> 
  <div className="card img-container hover">
  {children}
  </div>
  </Col>
  )
}
