const express = require("express");
const router = express.Router();

const bookManagement = require("../controllers/bookManagement");

router.get("/", bookManagement.liste_all_bookManagement);
router.post("/create", bookManagement.add_bookManagement);
router.post("/update", bookManagement.update_bookManagement);
router.delete("/delete/:id", bookManagement.delete_bookManagement);
router.post("/encours", bookManagement.emprunt_en_cours);

module.exports = router;
