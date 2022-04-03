const express = require("express");
const router = express.Router();

const bookPhysiqueController = require("../controllers/bookPhysique");

router.get("/", bookPhysiqueController.liste_of_physicakBook);
router.get("/detail/:id", bookPhysiqueController.detail_of_physicalBook);
router.post("/create", bookPhysiqueController.create_a_physicalBook);
router.post("/update", bookPhysiqueController.update_a_physicalBook);
router.delete("/delete/:id", bookPhysiqueController.delete_a_physicalBook);
router.post("/emprunter", bookPhysiqueController.emprunter_a_physicalBook);

module.exports = router;
