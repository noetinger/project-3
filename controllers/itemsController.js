const db = require("../models");
// Defining methods for the itemsController
module.exports = {
  findAll: function (req, res) {
    db.AuctionItem
      .find(req.query)
      .sort({
        date: -1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.AuctionItem
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.AuctionItem
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.AuctionItem
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  updateCurrentBidder: function (req, res) {
    const newBidderName = req.header('Authorization')
      .split('.')
      .slice(1)
      .join(' ');



    console.log(req.body);


    db.AuctionItem
      .findByIdAndUpdate(req.params.id, {
        $set: {
          // change the name of the current bidder to the currently logged in user

          currentBidder: newBidderName,
          // change the bid ammount on click
          currentBid: req.body.newBid

        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(502).json(err))
  },
  remove: function (req, res) {
    db.AuctionItem
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  

};