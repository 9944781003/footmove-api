const StopModel = require("../models/Stop");

module.exports = class StopService {
  static async getAllStops() {
    try {
      const allStops = await StopModel.find();
      return allStops;
    } catch (error) {
      console.log(`Could not fetch stops ${error}`);
    }
  }
  static async createStop(data) {
    try {
      const response = await StopModel.create(data);
      return response;
    } catch (error) {
      console.log(`Could not fetch stops ${error}`);
    }
  }
  static async getStopByid(stopId) {
    try {
      const singleStopResponse = await StopModel.findById(stopId);
      return singleStopResponse;
    } catch (error) {
      console.log(`Could not fetch stops ${error}`);
    }
  }
  static async updateStopByid(req) {
    try {
      const updateResponse = await StopModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not fetch stops ${error}`);
    }
  }
  static async deleteStopByid(stopId) {
    try {
      const deleteResponse = await StopModel.deleteOne({
        _id: stopId,
      });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not fetch stops ${error}`);
    }
  }
};
