const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

const itemSeed = [{
        id: 1,
        name: "Chapin 20075",
        description: "Bleach and disinfectant sprayer",
        condition: "Open box - new",
        retailValue: 14.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://www.zoro.com/static/cms/product/full/Z008D-fo5oy.JPG",
        currentBid: 3
    },
    {
        id: 2,
        name: "Chapin 20075",
        description: "Bleach and disinfectant sprayer",
        condition: "Open box - new",
        retailValue: 14.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://www.zoro.com/static/cms/product/full/Z008D-fo5oy.JPG",
        currentBid: 3
    },
    {
        id: 3,
        name: "Chapin Sure Spray",
        description: "lawn and garden sprayer",
        condition: "Open box - new",
        retailValue: 14.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://chapinmfg.com/Portals/0/Hotcakes/Data/products/ca87cac2-a2ac-4772-ad9d-65177db13dbf/medium/chapin-20010-1-gallon-surespray-sprayer.jpg",
        currentBid: 3
    },
    {
        id: 4,
        name: "Eliminator",
        description: "multi-purpose sprayer ",
        condition: "Open box - new",
        retailValue: 6.99,
        openingBid: 1,
        bidIncrement: 1,
        image: "https://www.zoro.com/static/cms/product/full/Z008D-fo5oy.JPG",
        currentBid: 1
    },
    {
        id: 5,
        name: "Scotts",
        description: "Multi-use Sprayer",
        condition: "Open box - new",
        retailValue: 22.50,
        openingBid: 3,
        bidIncrement: 2,
        image: "https://i.ebayimg.com/images/g/VrQAAOSwraNdLp9R/s-l1600.jpg",
        currentBid: 3
    }
];


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/auction"
).then(() => {
    console.log('this connected')
    // console.log(db)
    // console.log(db.auction)
    db.AuctionItem
        .deleteMany({})
        .then(() => db.AuctionItem.collection.insertMany(itemSeed))
        .then(data => {
            console.log(data.result.n + " records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
});
