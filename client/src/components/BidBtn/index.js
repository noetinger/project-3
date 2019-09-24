import React from "react";
import "./style.css";
import { getFromStorage } from '../../utils/storage';
import 'whatwg-fetch';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BidBtn(props) {
  return (
    <span className="bid-btn animated fadeIn" {...props} role="button" tabIndex="0">
      Bid Now
    </span>
  );
}

// function testToken() {
// const getToken = localStorage.getItem('token');
// var userID = getToken.split(".");
// console.log(getToken);
// console.log(userID[1], userID[2]);
// };

// testToken();

export default BidBtn;
