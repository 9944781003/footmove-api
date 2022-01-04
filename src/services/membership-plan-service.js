const MembershipPlanModel = require("../models/MembershipPlan");

module.exports = class MembershipPlanService {
  static async getAllMembershipPlans() {
    try {
      const allMembershipPlans = await MembershipPlanModel.find();
      return allMembershipPlans;
    } catch (error) {
      console.log(`Could not fetch memberhsip plans ${error}`);
    }
  }
  static async createMembershipPlan(data) {
    try {
      const response = await MembershipPlanModel.create(data);
      return response;
    } catch (error) {
      console.log(`Could not fetch memberhsip plans ${error}`);
    }
  }
  static async getMembershipPlanByid(membershipplan_Id) {
    try {
      const singleMembershipPlanResponse = await MembershipPlanModel.findById(
        membershipplan_Id
      );
      return singleMembershipPlanResponse;
    } catch (error) {
      console.log(`Could not fetch memberhsip plans ${error}`);
    }
  }
  static async updateMembershipPlanyid(req) {
    try {
      const updateResponse = await MembershipPlanModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not fetch memberhsip plans ${error}`);
    }
  }
  static async deleteMembershipPlanByid(membershipplan_Id) {
    try {
      const deleteResponse = await MembershipPlanModel.deleteOne({
        _id: membershipplan_Id,
      });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not fetch memberhsip plans ${error}`);
    }
  }
};
