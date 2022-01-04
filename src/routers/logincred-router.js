const express = require("express");
const router = express.Router();
const LoginCredCtl = require("../controllers/logincred-controller");

router.get("/", LoginCredCtl.apiGetAllLoginCreds);
router.get("/:id", LoginCredCtl.apiGetLoginCredById);
router.post("/", LoginCredCtl.apiCreateLoginCred);
router.put("/:id", LoginCredCtl.apiUpdateLoginCred);
router.delete("/:id", LoginCredCtl.apiDeleteLoginCred);

module.exports = router;
