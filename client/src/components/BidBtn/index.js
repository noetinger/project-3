import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BidBtn(props) {
  return (
    <span className="bid-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default BidBtn;
