const router = require('express').Router();
const auctionController = require('../../controllers/auctionController');

// Matches with '/auction'
router.route('/auction')
  .get(auctionController.findAll)
  .post(auctionController.updateOne);

module.exports = router;
