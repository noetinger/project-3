const router = require("express").Router();
const itemRoutes = require("./auctionitems");
const accountRoutes = require("./accoutsRouter")

// Auction routes
router.use("/auctionitems", itemRoutes);
router.use("/account", accountRoutes);

module.exports = router;
