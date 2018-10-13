const router = require("express").Router();
const menuController = require("../../controllers/menuController");

// Matches with "/api/menu"
router
  .route("/")
  .get(menuController.findAll)
  .post(menuController.create)

// Matches with "/api/menu/:id"
router
  .route("/:id")
  .put(menuController.update)
  .delete(menuController.remove);

module.exports = router;
