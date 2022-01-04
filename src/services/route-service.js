const RouteModel = require("../models/Route");

module.exports = class RouteService {
  static async getAllRoutes() {
    try {
      const allRoutes = await RouteModel.find();
      return allRoutes;
    } catch (error) {
      console.log(`Could not fetch routes ${error}`);
    }
  }
  static async createRouter(data) {
    try {
      const response = await RouteModel.create(data);
      return response;
    } catch (error) {
      console.log(`Could not fetch router ${error}`);
    }
  }
  static async getRouteByid(routeId) {
    try {
      const singleRouteResponse = await RouteModel.findById(routeId);
      return singleRouteResponse;
    } catch (error) {
      console.log(`Could not fetch routes ${error}`);
    }
  }
  static async updateRouteByid(req) {
    try {
      const updateResponse = await RouteModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not fetch routes ${error}`);
    }
  }
  static async deleteRouteByid(routeId) {
    try {
      const deleteResponse = await RouteModel.deleteOne({
        _id: routeId,
      });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not fetch routes ${error}`);
    }
  }
};
