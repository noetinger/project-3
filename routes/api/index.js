const router = require("express").Router();
const itemRoutes = require("./auctionitems");

// Book routes
router.use("/auctionitems", itemRoutes);

module.exports = router;
