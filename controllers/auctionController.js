const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Auction
            .find({})
            .sort({
                date: -1
            })
            .then(dbAuctionItems => res.json(dbAuctionItems))
            .catch(err => res.status(502).json(err))
    },

    update: function (req, res) {
        db.Auction
            .create(req.body)
            .then(dbAuction => res.json(dbAuction))
            .catch(err => res.status(502).json(err))
    }
};