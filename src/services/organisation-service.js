const OrganisationModel = require("../models/Organisation");

module.exports = class OrganisationService {
  static async getOrganisations() {
    try {
      const allOrganisations = await OrganisationModel.find();

      return allOrganisations;
    } catch (error) {
      console.log(`Could not fetch organisations ${error}`);
    }
  }
  static async createOrganisation(data) {
    try {
      const response = await OrganisationModel.create(data);
      return response;
    } catch (error) {
      console.log(`Could not fetch organisations ${error}`);
    }
  }
  static async getOrganisationByid(organisationId) {
    try {
      const singleOrganisationResponse = await OrganisationModel.findById(
        organisationId
      );
      return singleOrganisationResponse;
    } catch (error) {
      console.log(`Could not fetch organisations ${error}`);
    }
  }
  static async updateOrganisationByid(req) {
    try {
      const updateResponse = await OrganisationModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not fetch organisations ${error}`);
    }
  }
  static async deleteOrganisationByid(organisationId) {
    try {
      const deleteResponse = await OrganisationModel.deleteOne({
        _id: organisationId,
      });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not fetch organisations ${error}`);
    }
  }
};
