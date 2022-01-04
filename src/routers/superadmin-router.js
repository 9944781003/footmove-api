const express = require("express");
const router = express.Router();
const SuperAdminCtl = require("../controllers/superadmin-controller");

router.get("/", SuperAdminCtl.apiGetAllSuperAdmins);
router.get("/:id", SuperAdminCtl.apiGetSuperAdminById);
router.post("/", SuperAdminCtl.apiCreateSuperAdmin);
router.put("/:id", SuperAdminCtl.apiUpdateSuperAdmin);
router.delete("/:id", SuperAdminCtl.apiDeleteSuperAdmin);

module.exports = router;
