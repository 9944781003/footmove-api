const express = require("express");
const router = express.Router();
const DriverCtl = require("../controllers/driver-controller");

router.get("/", DriverCtl.apiGetAllDrivers);
router.get("/:id", DriverCtl.apiGetDriverById);
router.post("/", DriverCtl.apiCreateDriver);
router.put("/:id", DriverCtl.apiUpdateDriver);
router.delete("/:id", DriverCtl.apiDeleteDriver);

module.exports = router;
