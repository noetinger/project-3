const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/auctionitems"
router.route("/")
  .get(itemsController.findAll)

// Matches with "/api/auctionitems/:id"
router
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.updateCurrentBidder)
  

module.exports = router;
