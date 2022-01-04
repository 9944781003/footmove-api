const VehicleService = require("../services/vehicle-service");

module.exports = class VehicleController {
  static async apiGetAllVehicles(req, res, next) {
    try {
      const vehicles = await VehicleService.getAllVehicles();
      if (!vehicles) {
        res.status(404).json("There are no vehicles published yet!");
      }
      res.json(vehicles);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetVehicleById(req, res, next) {
    try {
      let id = req.params.id || {};
      const vehicle = await VehicleService.getVehicleByid(id);
      res.json(vehicle);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCreateVehicle(req, res, next) {
    try {
      const createdVehicle = await VehicleService.createVehicle(req.body);
      res.json(createdVehicle);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiUpdateVehicle(req, res, next) {
    try {
      const updatedVehicle = await VehicleService.updateVehicleByid(req);

      if (updatedVehicle.modifiedCount === 0) {
        throw new Error("Unable to update vehicle, error occord");
      }

      res.json(updatedVehicle);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiDeleteVehicle(req, res, next) {
    try {
      const vehicleId = req.params.id;
      const deleteResponse = await VehicleService.deleteVehicleByid(vehicleId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
