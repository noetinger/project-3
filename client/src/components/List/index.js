import React from "react";
import "./style.css";
import { Col, Row, Container } from "..//Grid";


// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className= "auction-items"> {children} </div>
  );
}

export function ListItem({ children }) {
  return (
  <Col size="md-4"> <div className="card img-container hover">
  {children}
  </div>
  </Col>
  )
}
