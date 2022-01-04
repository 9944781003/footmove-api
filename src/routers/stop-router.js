const express = require("express");
const router = express.Router();
const StopCtl = require("../controllers/stop-controller");

router.get("/", StopCtl.apiGetAllStops);
router.get("/:id", StopCtl.apiGetStopById);
router.post("/", StopCtl.apiCreateStop);
router.put("/:id", StopCtl.apiUpdateStop);
router.delete("/:id", StopCtl.apiDeleteStop);

module.exports = router;
