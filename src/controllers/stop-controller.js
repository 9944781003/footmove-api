const StopService = require("../services/stop-service");

module.exports = class StopController {
  static async apiGetAllStops(req, res, next) {
    try {
      const stops = await StopService.getAllStops();

      if (!stops) {
        res.status(404).json("There are no stops published yet!");
      }
      res.json(stops);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetStopById(req, res, next) {
    try {
      let id = req.params.id || {};
      const stop = await StopService.getStopByid(id);
      res.json(stop);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCreateStop(req, res, next) {
    try {
      const createdStop = await StopService.createStop(req.body);
      res.json(createdStop);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiUpdateStop(req, res, next) {
    try {
      const updatedStop = await StopService.updateStopByid(req);

      if (updatedStop.modifiedCount === 0) {
        throw new Error("Unable to update stop, error occord");
      }

      res.json(updatedStop);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiDeleteStop(req, res, next) {
    try {
      const stopId = req.params.id;
      const deleteResponse = await StopService.deleteStopByid(stopId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
