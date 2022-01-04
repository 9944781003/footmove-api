const RouteAccessModel = require("../models/RouteAccess");

module.exports = class RouteAccessService {
  static async getAllRouteAccesses() {
    try {
      const allroutesccesses = await RouteAccessModel.find();
      return allroutesccesses;
    } catch (error) {
      console.log(`Could not fetch allroutesccesses ${error}`);
    }
  }
  static async createRouteAccess(data) {
    try {
      const response = await RouteAccessModel.create(data);
      return response;
    } catch (error) {
      console.log(`Could not fetch allroutesccesses ${error}`);
    }
  }
  static async getRouteAccessByid(access_id) {
    try {
      const single_route_access_response = await RouteAccessModel.findById(
        access_id
      );
      return single_route_access_response;
    } catch (error) {
      console.log(`Could not fetch allroutesccesses ${error}`);
    }
  }
  static async updateRouteAccessByid(req) {
    try {
      const updateResponse = await RouteAccessModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not fetch allroutesccesses ${error}`);
    }
  }
  static async deleteRouteAccessByid(access_id) {
    try {
      const deleteResponse = await RouteAccessModel.deleteOne({
        _id: access_id,
      });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not fetch allroutesccesses ${error}`);
    }
  }
};
