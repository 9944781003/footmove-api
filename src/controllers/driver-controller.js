const DriverService = require("../services/driver-service");

module.exports = class DriverController {
  static async apiGetAllDrivers(req, res, next) {
    try {
      const drivers = await DriverService.getAllDrivers();
      if (!drivers) {
        res.status(404).json("There are no drivers published yet!");
      }
      res.json(drivers);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetDriverById(req, res, next) {
    try {
      let id = req.params.id || {};
      const driver = await DriverService.getDriverById(id);
      res.json(driver);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCreateDriver(req, res, next) {
    try {
      const createdDriver = await DriverService.createDriver(req.body);
      res.json(createdDriver);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiUpdateDriver(req, res, next) {
    try {
      const updatedDriver = await DriverService.updateDriverByid(req);

      if (updatedDriver.modifiedCount === 0) {
        throw new Error("Unable to update driver, error occord");
      }

      res.json(updatedDriver);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiDeleteDriver(req, res, next) {
    try {
      const driverId = req.params.id;
      const deleteResponse = await DriverService.deleteDriverByid(driverId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
