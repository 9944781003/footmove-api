const OrganisationService = require("../services/organisation-service");

module.exports = class OrganisationController {
  static async apiGetAllOrganisations(req, res, next) {
    try {
      const organisations = await OrganisationService.getOrganisations();
      if (!organisations) {
        res.status(404).json("There are no organisation published yet!");
      }
      res.json(organisations);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetOrganisationById(req, res, next) {
    try {
      let id = req.params.id || {};
      const organisation = await OrganisationService.getOrganisationByid(id);
      res.json(organisation);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCreateOrganisation(req, res, next) {
    try {
      const createdOrganisation = await OrganisationService.createOrganisation(
        req.body
      );
      res.json(createdOrganisation);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiUpdateOrganisation(req, res, next) {
    try {
      const updatedOrganisation =
        await OrganisationService.updateOrganisationByid(req);

      if (updatedOrganisation.modifiedCount === 0) {
        throw new Error("Unable to update organisation, error occord");
      }

      res.json(updatedOrganisation);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiDeleteOrganisation(req, res, next) {
    try {
      const organisationId = req.params.id;
      const deleteResponse = await OrganisationService.deleteOrganisationByid(
        organisationId
      );
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
