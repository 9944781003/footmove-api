const PassengerModel = require("../models/Passenger");

module.exports = class PassengerService {
  static async getAllPassengers() {
    try {
      const allPassengers = await PassengerModel.find();
      return allPassengers;
    } catch (error) {
      console.log(`Could not fetch passengers ${error}`);
    }
  }
  static async createPassenger(data) {
    try {
      const response = await PassengerModel.create(data);
      return response;
    } catch (error) {
      console.log(`Could not fetch passengers ${error}`);
    }
  }
  static async getPassengerByid(passengerId) {
    try {
      const singlePassengerResponse = await PassengerModel.findById(
        passengerId
      );
      return singlePassengerResponse;
    } catch (error) {
      console.log(`Could not fetch passengers ${error}`);
    }
  }
  static async updatePassengerByid(req) {
    try {
      const updateResponse = await PassengerModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not fetch passengers ${error}`);
    }
  }
  static async deletePassengerByid(passengerId) {
    try {
      const deleteResponse = await PassengerModel.deleteOne({
        _id: passengerId,
      });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not fetch passengers ${error}`);
    }
  }
};
