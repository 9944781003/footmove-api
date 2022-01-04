const express = require("express");
const router = express.Router();
const PassengerCtl = require("../controllers/passenger-controller");

router.get("/", PassengerCtl.apiGetAllPassengers);
router.get("/:id", PassengerCtl.apiGetPassengerById);
router.post("/", PassengerCtl.apiCreatePassenger);
router.put("/:id", PassengerCtl.apiUpdatePassenger);
router.delete("/:id", PassengerCtl.apiDeletePassenger);

module.exports = router;
