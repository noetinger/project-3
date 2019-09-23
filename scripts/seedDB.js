const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Auction Items collection and inserts the items below

const itemSeed = [{
        id: 5,
        name: "Scotts",
        description: "Multi-use Sprayer",
        condition: "Open box - new",
        retailValue: 22.50,
        openingBid: 3,
        bidIncrement: 2,
        image: "https://i.ebayimg.com/images/g/VrQAAOSwraNdLp9R/s-l1600.jpg",
        currentBid: 3
    },
    {
        id: 6,
        name: "Pressure Sprayer",
        description: "Home and Garden",
        condition: "Open box - new",
        retailValue: 10.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 7,
        name: "Flo Master 2202CSS",
        description: "Cleaners, Sealers, & Stains",
        condition: "Open box - new",
        retailValue: 18.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/9b0707eb-41d6-4e27-b5e0-0095b0a65dc2/svn/rl-flo-master-sprayers-2202css-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 8,
        name: "Flo Master 1415BC",
        description: "Bleach and Chemicals",
        condition: "Open box - new",
        retailValue: 14.98,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/0172577a-b23c-4549-8ef6-c0388eb43179/svn/rl-flo-master-sprayers-1415bc-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 9,
        name: "Flo Master 1415BC",
        description: "Bleach and Chemicals",
        condition: "Open box - new",
        retailValue: 14.98,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/0172577a-b23c-4549-8ef6-c0388eb43179/svn/rl-flo-master-sprayers-1415bc-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 10,
        name: "Flo Master 1415D",
        description: "Wood & MasonryOP",
        condition: "Open box - new",
        retailValue: 10.97,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/b9b3d090-9aea-443f-a77d-9ef7a808466c/svn/rl-flo-master-sprayers-1415d-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 11,
        name: "Chapin SureSpray",
        description: "Lawn & Garden Sprayer",
        condition: "Open box - new",
        retailValue: 15.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://hw.menardc.com/main/items/media/RECHA001/ProductLarge/2631215.jpg",
        currentBid: 3
    },
    {
        id: 12,
        name: "Eliminator",
        description: "Heavy Duty Sprayer",
        condition: "Open box - new",
        retailValue: 10.93,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://i5.walmartimages.com/asr/5fbfe798-ff98-4cbc-9c33-6c9c993a3ba9_1.22a84c01834ae4ff32b7f59c1448e726.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
        currentBid: 3
    },
    {
        id: 12,
        name: "Eliminator",
        description: "Heavy Duty Sprayer",
        condition: "Open box - new",
        retailValue: 10.93,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://i5.walmartimages.com/asr/5fbfe798-ff98-4cbc-9c33-6c9c993a3ba9_1.22a84c01834ae4ff32b7f59c1448e726.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
        currentBid: 3
    },
    {
        id: 13,
        name: "HDX",
        description: "Multi Purpose",
        condition: "Open box - new",
        retailValue: 15.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/4a5e7925-081d-4247-a095-457b32dc4d71/svn/hdx-sprayers-1502hdxa-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 14,
        name: "Chapin",
        description: "Home and Garden",
        condition: "Open box - new",
        retailValue: 17.32,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/9def7142-8de1-41f9-84cc-63ac1789bfdb/svn/chapin-sprayers-20002-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 15,
        name: "RoundUp",
        description: "Multi Use sprayer",
        condition: "Open box - new",
        retailValue: 19.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://mobileimages.lowes.com/product/converted/841688/841688001787.jpg?size=xl",
        currentBid: 3
    },
    {
        id: 16,
        name: "RoundUp",
        description: "Multi Use sprayer",
        condition: "Open box - new",
        retailValue: 19.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://mobileimages.lowes.com/product/converted/841688/841688001787.jpg?size=xl",
        currentBid: 3
    },
    {
        id: 17,
        name: "RoundUp",
        description: "Multi Use sprayer",
        condition: "Open box - new",
        retailValue: 19.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://mobileimages.lowes.com/product/converted/841688/841688001787.jpg?size=xl",
        currentBid: 3
    },
    {
        id: 18,
        name: "Husqvarna",
        description: "Multi Use sprayer",
        condition: "Open box - new",
        retailValue: 19.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://www.ebay.com/itm/223328455743",
        currentBid: 3
    },
    {
        id: 19,
        name: "Hudson",
        description: "Pumpless Multi Use Sprayer",
        condition: "Open box - new",
        retailValue: 27.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://www.northerntool.com/images/product/2000x2000/268/268220_2000x2000.jpg",
        currentBid: 3
    },
    {
        id: 20,
        name: "Solo",
        description: "Farm and Landscape series",
        condition: "Open box - new",
        retailValue: 48.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/716OEJBaUrL._SL1500_.jpg",
        currentBid: 3
    },
    {
        id: 21,
        name: "Scotts",
        description: "2/1 Pro backpack",
        condition: "Open box - new",
        retailValue: 81.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://i.ebayimg.com/images/g/zGMAAOSwbS1cyPjU/s-l1600.jpg",
        currentBid: 3
    },
    {
        id: 22,
        name: "RoundUp",
        description: "Multi Use backpack sprayer",
        condition: "Open box - new",
        retailValue: 80.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1012103?$456$",
        currentBid: 3
    },
    {
        id: 23,
        name: "Husqvarna",
        description: "200 series backpack sprayer",
        condition: "Open box - new",
        retailValue: 80.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1012103?$456$",
        currentBid: 3
    },
    {
        id: 24,
        name: "Worx V34850",
        description: "Cordless SD Driver with Flex",
        condition: "Open box - new",
        retailValue: 39.12,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 25,
        name: "Worx V34850",
        description: "Cordless SD Driver with Flex",
        condition: "Open box - new",
        retailValue: 39.12,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 26,
        name: "Worx V34850",
        description: "Cordless SD Driver with Flex",
        condition: "Open box - new",
        retailValue: 39.12,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 27,
        name: "Parkside",
        description: "RapidFire Screwdriver",
        condition: "Open box - new",
        retailValue: 19.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 28,
        name: "Kobalt 0759890",
        description: "Adjustable Screwdriver",
        condition: "Open box - new",
        retailValue: 7.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 29,
        name: "B&D BCD70253PK",
        description: "53 piece Tool Kit with 20v",
        condition: "Open box - new",
        retailValue: 7.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 30,
        name: "B&D BdA90250",
        description: "250 pc tool kit",
        condition: "Open box - new",
        retailValue: 29.97,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 31,
        name: "Headlamp",
        description: "LED Headlamp",
        condition: "No box - used",
        retailValue: 9.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 32,
        name: "Kobalt 0759892",
        description: "Ratcheting Adjustable",
        condition: "No box - used",
        retailValue: 14.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 33,
        name: "TightFit 00110",
        description: "90 degree Drill Attachment",
        condition: "New",
        retailValue: 41.98,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 34,
        name: "#1 -YLQ4640C-120",
        description: "1500psi Pressure Washer",
        condition: "Open box - New",
        retailValue: 99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 35,
        name: "#2 - YLQ5321C-120",
        description: "1900psi Pressure Washer",
        condition: "Open box -New",
        retailValue: 150,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 36,
        name: "#3 - SPX4000",
        description: "2600psi Pressure Washer",
        condition: "Open box -New",
        retailValue: 190,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 37,
        name: "Wen belt disc sander",
        description: "6502T 4.3-Amp 4 x 36 in Belt and 6 in. Disc Sander with Cast Iron Base",
        condition: "Open box -New",
        retailValue: 130,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/81LzWlUMC7L._SL1500_.jpg",
        currentBid: 3
    },
    {
        id: 38,
        name: "MasterForce",
        description: "Compact Slide dual bevel miter saw",
        condition: "As New",
        retailValue: 266,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://hw.menardc.com/main/items/media/SUMEC001/ProductLarge/240-0021CompleteProductView.jpg",
        currentBid: 3
    },
    {
        id: 39,
        name: "Sunjoe SPX202C",
        description: "Sunjoe 36v Pressure Washer",
        condition: "Open box - used",
        retailValue: 199,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://snowjoe.imgix.net/product-images/SPX202C_01.jpg?auto=compress&fm=webp&w=700",
        currentBid: 3
    },
    {
        id: 6,
        name: "Pressure Sprayer",
        description: "Home and Garden",
        condition: "Open box - new",
        retailValue: 10.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 7,
        name: "Flo Master 2202CSS",
        description: "Cleaners, Sealers, & Stains",
        condition: "Open box - new",
        retailValue: 18.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/9b0707eb-41d6-4e27-b5e0-0095b0a65dc2/svn/rl-flo-master-sprayers-2202css-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 8,
        name: "Flo Master 1415BC",
        description: "Bleach and Chemicals",
        condition: "Open box - new",
        retailValue: 14.98,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/0172577a-b23c-4549-8ef6-c0388eb43179/svn/rl-flo-master-sprayers-1415bc-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 9,
        name: "Flo Master 1415BC",
        description: "Bleach and Chemicals",
        condition: "Open box - new",
        retailValue: 14.98,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/0172577a-b23c-4549-8ef6-c0388eb43179/svn/rl-flo-master-sprayers-1415bc-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 10,
        name: "Flo Master 1415D",
        description: "Wood & MasonryOP",
        condition: "Open box - new",
        retailValue: 10.97,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/b9b3d090-9aea-443f-a77d-9ef7a808466c/svn/rl-flo-master-sprayers-1415d-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 11,
        name: "Chapin SureSpray",
        description: "Lawn & Garden Sprayer",
        condition: "Open box - new",
        retailValue: 15.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://hw.menardc.com/main/items/media/RECHA001/ProductLarge/2631215.jpg",
        currentBid: 3
    },
    {
        id: 12,
        name: "Eliminator",
        description: "Heavy Duty Sprayer",
        condition: "Open box - new",
        retailValue: 10.93,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://i5.walmartimages.com/asr/5fbfe798-ff98-4cbc-9c33-6c9c993a3ba9_1.22a84c01834ae4ff32b7f59c1448e726.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
        currentBid: 3
    },
    {
        id: 12,
        name: "Eliminator",
        description: "Heavy Duty Sprayer",
        condition: "Open box - new",
        retailValue: 10.93,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://i5.walmartimages.com/asr/5fbfe798-ff98-4cbc-9c33-6c9c993a3ba9_1.22a84c01834ae4ff32b7f59c1448e726.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
        currentBid: 3
    },
    {
        id: 13,
        name: "HDX",
        description: "Multi Purpose",
        condition: "Open box - new",
        retailValue: 15.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/4a5e7925-081d-4247-a095-457b32dc4d71/svn/hdx-sprayers-1502hdxa-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 14,
        name: "Chapin",
        description: "Home and Garden",
        condition: "Open box - new",
        retailValue: 17.32,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images.homedepot-static.com/productImages/9def7142-8de1-41f9-84cc-63ac1789bfdb/svn/chapin-sprayers-20002-64_1000.jpg",
        currentBid: 3
    },
    {
        id: 15,
        name: "RoundUp",
        description: "Multi Use sprayer",
        condition: "Open box - new",
        retailValue: 19.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://mobileimages.lowes.com/product/converted/841688/841688001787.jpg?size=xl",
        currentBid: 3
    },
    {
        id: 16,
        name: "RoundUp",
        description: "Multi Use sprayer",
        condition: "Open box - new",
        retailValue: 19.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://mobileimages.lowes.com/product/converted/841688/841688001787.jpg?size=xl",
        currentBid: 3
    },
    {
        id: 17,
        name: "RoundUp",
        description: "Multi Use sprayer",
        condition: "Open box - new",
        retailValue: 19.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://mobileimages.lowes.com/product/converted/841688/841688001787.jpg?size=xl",
        currentBid: 3
    },
    {
        id: 18,
        name: "Husqvarna",
        description: "Multi Use sprayer",
        condition: "Open box - new",
        retailValue: 19.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://www.ebay.com/itm/223328455743",
        currentBid: 3
    },
    {
        id: 19,
        name: "Hudson",
        description: "Pumpless Multi Use Sprayer",
        condition: "Open box - new",
        retailValue: 27.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://www.northerntool.com/images/product/2000x2000/268/268220_2000x2000.jpg",
        currentBid: 3
    },
    {
        id: 20,
        name: "Solo",
        description: "Farm and Landscape series",
        condition: "Open box - new",
        retailValue: 48.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/716OEJBaUrL._SL1500_.jpg",
        currentBid: 3
    },
    {
        id: 21,
        name: "Scotts",
        description: "2/1 Pro backpack",
        condition: "Open box - new",
        retailValue: 81.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://i.ebayimg.com/images/g/zGMAAOSwbS1cyPjU/s-l1600.jpg",
        currentBid: 3
    },
    {
        id: 22,
        name: "RoundUp",
        description: "Multi Use backpack sprayer",
        condition: "Open box - new",
        retailValue: 80.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1012103?$456$",
        currentBid: 3
    },
    {
        id: 23,
        name: "Husqvarna",
        description: "200 series backpack sprayer",
        condition: "Open box - new",
        retailValue: 80.00,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1012103?$456$",
        currentBid: 3
    },
    {
        id: 24,
        name: "Worx V34850",
        description: "Cordless SD Driver with Flex",
        condition: "Open box - new",
        retailValue: 39.12,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 25,
        name: "Worx V34850",
        description: "Cordless SD Driver with Flex",
        condition: "Open box - new",
        retailValue: 39.12,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 26,
        name: "Worx V34850",
        description: "Cordless SD Driver with Flex",
        condition: "Open box - new",
        retailValue: 39.12,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 27,
        name: "Parkside",
        description: "RapidFire Screwdriver",
        condition: "Open box - new",
        retailValue: 19.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 28,
        name: "Kobalt 0759890",
        description: "Adjustable Screwdriver",
        condition: "Open box - new",
        retailValue: 7.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 29,
        name: "B&D BCD70253PK",
        description: "53 piece Tool Kit with 20v",
        condition: "Open box - new",
        retailValue: 7.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 30,
        name: "B&D BdA90250",
        description: "250 pc tool kit",
        condition: "Open box - new",
        retailValue: 29.97,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 31,
        name: "Headlamp",
        description: "LED Headlamp",
        condition: "No box - used",
        retailValue: 9.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 32,
        name: "Kobalt 0759892",
        description: "Ratcheting Adjustable",
        condition: "No box - used",
        retailValue: 14.99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 33,
        name: "TightFit 00110",
        description: "90 degree Drill Attachment",
        condition: "New",
        retailValue: 41.98,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 34,
        name: "#1 -YLQ4640C-120",
        description: "1500psi Pressure Washer",
        condition: "Open box - New",
        retailValue: 99,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 35,
        name: "#2 - YLQ5321C-120",
        description: "1900psi Pressure Washer",
        condition: "Open box -New",
        retailValue: 150,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 36,
        name: "#3 - SPX4000",
        description: "2600psi Pressure Washer",
        condition: "Open box -New",
        retailValue: 190,
        openingBid: 3,
        bidIncrement: 1,
        image: "",
        currentBid: 3
    },
    {
        id: 37,
        name: "Wen belt disc sander",
        description: "6502T 4.3-Amp 4 x 36 in Belt and 6 in. Disc Sander with Cast Iron Base",
        condition: "Open box -New",
        retailValue: 130,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/81LzWlUMC7L._SL1500_.jpg",
        currentBid: 3
    },
    {
        id: 38,
        name: "MasterForce",
        description: "Compact Slide dual bevel miter saw",
        condition: "As New",
        retailValue: 266,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://hw.menardc.com/main/items/media/SUMEC001/ProductLarge/240-0021CompleteProductView.jpg",
        currentBid: 3
    },
    {
        id: 39,
        name: "Sunjoe SPX202C",
        description: "Sunjoe 36v Pressure Washer",
        condition: "Open box - used",
        retailValue: 199,
        openingBid: 3,
        bidIncrement: 1,
        image: "https://snowjoe.imgix.net/product-images/SPX202C_01.jpg?auto=compress&fm=webp&w=700",
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