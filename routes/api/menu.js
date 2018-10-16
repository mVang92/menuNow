const router = require("express").Router();
const menuController = require("../../controllers/menuController");

// Matches with "/api/menu"
router
  .route("/")
  .post(menuController.create)

// Matches with "/api/menu/:id"
router
  .route("/:id")
  .get(menuController.findOne)
  .put(menuController.update)
  .delete(menuController.remove);
  
module.exports = router;
