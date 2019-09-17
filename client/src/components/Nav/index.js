import React from "react";
import "./style.css";

function Nav (props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white justify-content-between">
        
        <img src="https://www.positecgroup.com/assets/positec-logo-cbf8f37124c367e4a97b432a27545d79.png" width="200px" height="100%" className="d-inline-block align-top" alt="Positec">
            </img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Auction List <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Account
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">My Bids</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Log Out</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
)
};
export default Nav;