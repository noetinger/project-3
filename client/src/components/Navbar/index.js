
import React from "react";
import "./style.css";

const Navbar = props => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <a class="navbar-brand" href="#"></a>
        <img src="images/Positec.png" width="30" height="30" class="d-inline-block align-top" alt="Positec">
            </img>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
            <a class="nav-link navbar-right" href="#">Auction List <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown navbar-right">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            My Account
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">My Bids</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Log Out</a>
            </div>
        </li>
        
        </ul>
        </div>
    </nav>
);
export default Navbar;
