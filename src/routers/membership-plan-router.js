const express = require("express");
const router = express.Router();
const MembershipPlanCtl = require("../controllers/membership-plan-controller");

router.get("/", MembershipPlanCtl.apiGetAllMembershipPlans);
router.get("/:id", MembershipPlanCtl.apiGetMembershipPlanById);
router.post("/", MembershipPlanCtl.apiCreateMembershipPlan);
router.put("/:id", MembershipPlanCtl.apiUpdateMembershipPlan);
router.delete("/:id", MembershipPlanCtl.apiDeleteMembershipPlan);

module.exports = router;
