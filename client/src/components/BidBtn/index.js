import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BidBtn(props) {
  return (
    <span className="bid-btn animated fadeIn" {...props} role="button" tabIndex="0">
      Bid Now
    </span>
  );
}

export default BidBtn;
