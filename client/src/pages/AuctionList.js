//Code for the main Auction List Page that displays
//  all the available items to bid on.

import React, {Component} from 'react';
// import API from '../utils/API';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import AuctionListItem from '../components/AuctionListItem'

class AuctionList extends Component {
    state = {auctionItems: []};

    //Methods to Query the database to GET all the books in the database.

    //Do we need other Query's?

    //Lifecycle Method - once the Auction List Items Components mounts it runs the 'loadBookshelf' method.

    render(){
        return(
            <div className="container">
                <Navbar />
                <AuctionListItem />
                <Footer />
            </div>
        )
    }

}

export default  AuctionList