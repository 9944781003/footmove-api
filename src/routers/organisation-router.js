const express = require("express");
const router = express.Router();
const OrganisationCtrl = require("../controllers/organisation-controller");

router.get("/", OrganisationCtrl.apiGetAllOrganisations);
router.get("/:id", OrganisationCtrl.apiGetOrganisationById);
router.post("/", OrganisationCtrl.apiCreateOrganisation);
router.put("/:id", OrganisationCtrl.apiUpdateOrganisation);
router.delete("/:id", OrganisationCtrl.apiDeleteOrganisation);

module.exports = router;
