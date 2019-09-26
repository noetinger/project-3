import React from "react";
import "./style.css";
function Footer(props){
    return (
<div id="footer" className="bg-dark d-flex flex-row d-flex justify-content-between">
        <a href="https://www.linkedin.com/in/ellen-evans-79631ba4/" className="dev-name">Ellen Evans</a>
        <a href="https://www.linkedin.com/in/steve-balerna-0a108b89/" className="dev-name">Steven Balerna</a>
        <a className="dev-warning text-warning" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}> &copy; 2019 Positec Tool Corp</a>  
        <a href="https://www.linkedin.com/in/nicholas-oetinger-070456157/" className="dev-name">Nick Oetinger</a>
        <a href="https://www.linkedin.com/in/william-sherrill-b04b20127/" className="dev-name">William Sherrill</a>      
    </div>
    )
}
export default Footer;