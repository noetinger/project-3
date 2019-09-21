import React from "react";
import "./style.css";
// {}
function Footer(props){
    return (
<div id="footer" className="bg-dark d-flex flex-row d-flex justify-content-between">
       
        <a href="" className="dev-name">Ellen Evans</a>
        <a href="" className="dev-name">Steven Balerna</a>
        <a className="dev-warning text-warning" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}> &copy; 2019 Positec Tool Corp</a>  
        <a href="" className="dev-name">Nick Oetinger</a>
        <a href="" className="dev-name">William Sherrill</a>
        
    </div>
    )
}
export default Footer;