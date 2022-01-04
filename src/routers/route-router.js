const express = require("express");
const router = express.Router();
const RouteCtl = require("../controllers/route-controller");

router.get("/", RouteCtl.apiGetAllRoutes);
router.get("/:id", RouteCtl.apiGetRouteById);
router.post("/", RouteCtl.apiCreateRoute);
router.put("/:id", RouteCtl.apiUpdateRoute);
router.delete("/:id", RouteCtl.apiDeleteRoute);

module.exports = router;
