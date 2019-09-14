//Component Auction List Item for each of the available bid items.

import React from 'react';
import './style.css';

function AuctionListItem(props) {
    return (
        <>
            {props.AuctionItem.map(item => (
                <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{item.name} + {item.description}</h4>
                        <h5 className="card-text">{item.currentBid}</h5>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AuctionListItem;