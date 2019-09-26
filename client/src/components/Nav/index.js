import React from "react";
import "./style.css";
function Nav (props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white justify-content-between">
        <a href="/auction"> <img src="https://www.positecgroup.com/assets/positec-logo-cbf8f37124c367e4a97b432a27545d79.png" width="200px" height="100%" className="d-inline-block align-top" alt="Positec">
            </img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/auction">Auction List <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/logout"> Log Out <span className="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
)
};
export default Nav;