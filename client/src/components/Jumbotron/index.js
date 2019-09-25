import React from "react";
import "./style.css";
import auction from './../../assets/images/auction.jpg'; 
function Jumbotron() {
  return (
    <div class="jumbotron text-center hoverable p-4">
      <div class="row">
        <div class="col-md-4 offset-md-1 mx-3 my-3">
          <div class="view overlay">
            <img src={auction} class="img-fluid" alt="auction image" />
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
        </div>
        <div class="col-md-7 text-md-left ml-3 mt-3">
          <h1> Positec Employee Auction</h1>
          <h4 class="h4 mb-4">October 2019</h4>
          <p class="font-weight-normal">Welcome to the Positec Employee Auction. 
          Feel free to scroll and browse the items up for auction below. 
          Click on the item to get a detailed view and bid. 
          Under "My Account" you can see your current bid list to easliy mange your items.</p>
            </div>
            </div>
        </div>
  );
}
export default Jumbotron;