const MembershipPlanService = require("../services/membership-plan-service");

module.exports = class MembershipPlanController {
  static async apiGetAllMembershipPlans(req, res, next) {
    try {
      const membershipPlan =
        await MembershipPlanService.getAllMembershipPlans();
      if (!membershipPlan) {
        res.status(404).json("There are no membership plans published yet!");
      }
      res.json(membershipPlan);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetMembershipPlanById(req, res, next) {
    try {
      let id = req.params.id || {};
      const membershipPlan = await MembershipPlanService.getMembershipPlanByid(
        id
      );
      res.json(membershipPlan);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCreateMembershipPlan(req, res, next) {
    try {
      const createdmembershipPlan =
        await MembershipPlanService.createMembershipPlan(req.body);
      res.json(createdmembershipPlan);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiUpdateMembershipPlan(req, res, next) {
    try {
      const updatedmembershipPlan =
        await MembershipPlanService.updateMembershipPlanyid(req);

      if (updatedmembershipPlan.modifiedCount === 0) {
        throw new Error("Unable to update membershipPlan, error occord");
      }

      res.json(updatedmembershipPlan);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiDeleteMembershipPlan(req, res, next) {
    try {
      const membershipPlanId = req.params.id;
      const deleteResponse =
        await MembershipPlanService.deleteMembershipPlanByid(membershipPlanId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
