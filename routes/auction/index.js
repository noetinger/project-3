const router = require('express').Router();
const auctionRoutes = require('./auctionRouter');

router.use('/auctionitems', auctionRoutes);

module.exports = router;