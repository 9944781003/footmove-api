const express = require("express");
const router = express.Router();
const VehicleCtl = require("../controllers/vehicle-controller");

router.get("/", VehicleCtl.apiGetAllVehicles);
router.get("/:id", VehicleCtl.apiGetVehicleById);
router.post("/", VehicleCtl.apiCreateVehicle);
router.put("/:id", VehicleCtl.apiUpdateVehicle);
router.delete("/:id", VehicleCtl.apiDeleteVehicle);

module.exports = router;
