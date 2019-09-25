const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  item: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  price: { 
    type: Number,
    required: true
  },
  retailValue: { 
    type: Number,
    required: true
  },
  openingBid: { 
    type: Number,
    required: true
  },
  bidIncrement: { 
    type: Number,
    required: true
  },
  image: String,
  link: {
    type: String,
    required: true
  },
  currentBid: { 
    type: Number,
    required: true
  },
  currentBidder: {
    type: String,
    required: true
  }
});
const AuctionItem = mongoose.model('AuctionItem', ItemSchema);
module.exports = AuctionItem;