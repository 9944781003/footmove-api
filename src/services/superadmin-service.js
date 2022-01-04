const SuperAdminModel = require("../models/SuperAdmin");

module.exports = class SuperAdminService {
  static async getAllSuperAdmins() {
    try {
      const allSuperAdmins = await SuperAdminModel.find();
      return allSuperAdmins;
    } catch (error) {
      console.log(`Could not fetch Super admins ${error}`);
    }
  }
  static async createSuperAdmin(data) {
    try {
      const response = await SuperAdminModel.create(data);
      return response;
    } catch (error) {
      console.log(`Could not fetch Super admins ${error}`);
    }
  }
  static async getSuperAdminByid(superadminId) {
    try {
      const singleSuperAdminResponse = await SuperAdminModel.findById(
        superadminId
      );
      return singleSuperAdminResponse;
    } catch (error) {
      console.log(`Could not fetch Super admins ${error}`);
    }
  }
  static async updateSuperAdminByid(req) {
    try {
      const updateResponse = await SuperAdminModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not fetch Super admins ${error}`);
    }
  }
  static async deleteSuperAdminByid(superadminId) {
    try {
      const deleteResponse = await SuperAdminModel.deleteOne({
        _id: superadminId,
      });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not fetch Super admins ${error}`);
    }
  }
};
