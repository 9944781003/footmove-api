const VehicleModel = require("../models/Vehicle");

module.exports = class VehicleService {
  static async getAllVehicles() {
    try {
      const allVehicles = await VehicleModel.find();
      return allVehicles;
    } catch (error) {
      console.log(`Could not fetch vehicles ${error}`);
    }
  }
  static async createVehicle(data) {
    try {
      const response = await VehicleModel.create(data);
      return response;
    } catch (error) {
      console.log(`Could not fetch vehicles ${error}`);
    }
  }
  static async getVehicleByid(vehicleId) {
    try {
      const singleVehicleResponse = await VehicleModel.findById(vehicleId);
      return singleVehicleResponse;
    } catch (error) {
      console.log(`Could not fetch vehicles ${error}`);
    }
  }
  static async updateVehicleByid(req) {
    try {
      const updateResponse = await VehicleModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not fetch vehicles ${error}`);
    }
  }
  static async deleteVehicleByid(vehicleId) {
    try {
      const deleteResponse = await VehicleModel.deleteOne({
        _id: vehicleId,
      });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not fetch vehicles ${error}`);
    }
  }
};
