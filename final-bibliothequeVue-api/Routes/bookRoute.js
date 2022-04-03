const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book");

router.get("/", bookController.liste_all_book);
router.get("/detail/:id", bookController.detail_of_book);
router.post("/create", bookController.create_a_book);
router.post("/update", bookController.update_a_book);
router.delete("/delete/:id", bookController.delete_a_book);

module.exports = router;
