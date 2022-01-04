const DriverModel = require("../models/Driver");

module.exports = class DriverService {
  static async getAllDrivers() {
    try {
      const allDrivers = await DriverModel.find();
      return allDrivers;
    } catch (error) {
      console.log(`Could not fetch drivers ${error}`);
    }
  }
  static async createDriver(data) {
    try {
      const response = await DriverModel.create(data);
      return response;
    } catch (error) {
      console.log(`Could not fetch drivers ${error}`);
    }
  }
  static async getDriverById(driverId) {
    try {
      const singleDriverResponse = await DriverModel.findById(driverId);
      return singleDriverResponse;
    } catch (error) {
      console.log(`Could not fetch drivers ${error}`);
    }
  }
  static async updateDriverByid(req) {
    try {
      const updateResponse = await DriverModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not fetch drivers ${error}`);
    }
  }
  static async deleteDriverByid(driverId) {
    try {
      const deleteResponse = await DriverModel.deleteOne({
        _id: driverId,
      });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not fetch drivers ${error}`);
    }
  }
};
