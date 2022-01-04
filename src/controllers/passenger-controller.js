const PassengerService = require("../services/passenger-service");

module.exports = class PassengerController {
  static async apiGetAllPassengers(req, res, next) {
    try {
      const passengers = await PassengerService.getAllPassengers();
      if (!passengers) {
        res.status(404).json("There are no passengers published yet!");
      }
      res.json(passengers);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetPassengerById(req, res, next) {
    try {
      let id = req.params.id || {};
      const vehicle = await PassengerService.getPassengerByid(id);
      res.json(vehicle);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCreatePassenger(req, res, next) {
    try {
      const createdPassenger = await PassengerService.createPassenger(req.body);
      res.json(createdPassenger);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiUpdatePassenger(req, res, next) {
    try {
      const updatedPassenger = await PassengerService.updatePassengerByid(req);

      if (updatedPassenger.modifiedCount === 0) {
        throw new Error("Unable to update passenger, error occord");
      }

      res.json(updatedPassenger);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiDeletePassenger(req, res, next) {
    try {
      const passengerId = req.params.id;
      const deleteResponse = await PassengerService.deletePassengerByid(
        passengerId
      );
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
