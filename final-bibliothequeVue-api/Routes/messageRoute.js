const express = require("express");
const router = express.Router();
const message = require("../controllers/message");

router.post("/", message.send_message);
router.get("/:matricule", message.all_message);
router.get("/:myMatricule/:userMatricule", message.message_of);
router.delete("/delete/:id", message.delete_message);

module.exports = router;
