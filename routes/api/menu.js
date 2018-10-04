const router = require("express").Router();
const menuController = require("../../controllers/menuController");

// Matches with "/api/menu"
router.route("/")
  .get(menuController.findAll)

// Matches with "/api/article/:id"
router
  .route("/:id")
  .get(menuController.findById)
  .put(menuController.update)
  .delete(menuController.remove);

router
  .route("/")
  .post(menuController.create)

module.exports = router;
