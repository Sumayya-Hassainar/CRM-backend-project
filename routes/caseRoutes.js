const express = require("express");
const router = express.Router();
const casecontroller= require("../controllers/caseController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);
router.post("/",casecontroller. createCase);
router.get("/",casecontroller. getAllCases);
router.get("/:id",casecontroller. getCaseById);
router.put("/:id", casecontroller.updateCase);
router.delete("/:id",casecontroller. deleteCase);

module.exports = router;
