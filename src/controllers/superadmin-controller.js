const SuperAdminService = require("../services/superadmin-service");

module.exports = class SuperAdminController {
  static async apiGetAllSuperAdmins(req, res, next) {
    try {
      const superadmins = await SuperAdminService.getAllSuperAdmins();

      if (!superadmins) {
        res.status(404).json("There are no super admin published yet!");
      }
      res.json(superadmins);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetSuperAdminById(req, res, next) {
    try {
      let id = req.params.id || {};
      const superadmin = await SuperAdminService.getSuperAdminByid(id);
      res.json(superadmin);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCreateSuperAdmin(req, res, next) {
    try {
      const createdSuperAdmin = await SuperAdminService.createSuperAdmin(
        req.body
      );
      res.json(createdSuperAdmin);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiUpdateSuperAdmin(req, res, next) {
    try {
      const updatedSuperAdmin = await SuperAdminService.updateSuperAdminByid(
        req
      );

      if (updatedSuperAdmin.modifiedCount === 0) {
        throw new Error("Unable to update Super admin, error occord");
      }

      res.json(updatedSuperAdmin);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiDeleteSuperAdmin(req, res, next) {
    try {
      const superadminid = req.params.id;
      const deleteResponse = await SuperAdminService.deleteSuperAdminByid(
        superadminid
      );
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
