const RouteService = require("../services//route-service");

module.exports = class RouteController {
  static async apiGetAllRoutes(req, res, next) {
    console.log("coming");
    try {
      const routes = await RouteService.getAllRoutes();

      if (!routes) {
        res.status(404).json("There are no routes published yet!");
      }
      res.json(routes);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetRouteById(req, res, next) {
    try {
      let id = req.params.id || {};
      const route = await RouteService.getRouteByid(id);
      res.json(route);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCreateRoute(req, res, next) {
    try {
      const createdRoute = await RouteService.createRouter(req.body);
      res.json(createdRoute);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiUpdateRoute(req, res, next) {
    try {
      const updatedRoute = await RouteService.updateRouteByid(req);

      if (updatedRoute.modifiedCount === 0) {
        throw new Error("Unable to update stop, error occord");
      }

      res.json(updatedRoute);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiDeleteRoute(req, res, next) {
    try {
      const routeId = req.params.id;
      const deleteResponse = await RouteService.deleteRouteByid(routeId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
