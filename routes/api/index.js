const router = require("express").Router();
const itemRoutes = require("./auctionitems");
const accountRoutes = require("./accoutsRouter")

// Book routes
router.use("/auctionitems", itemRoutes);
router.use("/account", accountRoutes);

module.exports = router;
