const express = require("express");
const router = express.Router();
const RouteAccessCtl = require("../controllers/route-access-controller");

router.get("/", RouteAccessCtl.apiGetAllRouteAccesses);
router.get("/:id", RouteAccessCtl.apiGetRouteAccessById);
router.post("/", RouteAccessCtl.apiCreateRouteAccess);
router.put("/:id", RouteAccessCtl.apiUpdateRouteAccess);
router.delete("/:id", RouteAccessCtl.apiDeleteRouteAccess);

module.exports = router;
