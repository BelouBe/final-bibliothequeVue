const express = require("express");

const router = express.Router();
const user = require("../controllers/user");

router.get("/", user.liste_all_user);
router.post("/create", user.create_a_user);
router.post("/login", user.login);
router.post("/update", user.update_a_user);
router.post("/deleteAll", user.delete_all);

module.exports = router;
