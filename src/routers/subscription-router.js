const express = require("express");
const router = express.Router();
const SubscriptionCtl = require("../controllers/subscription-controller");

router.get("/", SubscriptionCtl.apiGetAllSubscriptions);
router.get("/:id", SubscriptionCtl.apiGetsubscriptionsById);
router.post("/", SubscriptionCtl.apiCreateSubscription);
router.put("/:id", SubscriptionCtl.apiUpdateSubscription);
router.delete("/:id", SubscriptionCtl.apiDeleteSubscription);

module.exports = router;
