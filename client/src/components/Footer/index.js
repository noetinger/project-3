import React from "react";
import "./style.css";

function Footer(props){
    return (
<div id="footer" className="bg-dark text-light d-flex justify-content-center text-center">
        <p>
        <a href="" className="text-light">Ellen Evans</a>
        <a href="" className="text-light">Steven Balerna</a>
        <a className="text-warning"> &copy; 2019 Positec Tool Corp</a>  
        <a href="" className="text-light">Nick Oetinger</a>
        <a href="" className="text-light">William Sherrill</a>
        </p>
    </div>
    )
}
export default Footer;