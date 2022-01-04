const RouteAccessService = require("../services/route-access-service");

module.exports = class RouteAccessController {
  static async apiGetAllRouteAccesses(req, res, next) {
    try {
      const route_acceses = await RouteAccessService.getAllRouteAccesses();
      if (!route_acceses) {
        res.status(404).json("There are no route_acceses published yet!");
      }
      res.json(route_acceses);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetRouteAccessById(req, res, next) {
    try {
      let id = req.params.id || {};
      const route_access = await RouteAccessService.getRouteAccessByid(id);
      res.json(route_access);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCreateRouteAccess(req, res, next) {
    try {
      const created_route_access = await RouteAccessService.createRouteAccess(
        req.body
      );
      res.json(created_route_access);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiUpdateRouteAccess(req, res, next) {
    try {
      const updated_route_access =
        await RouteAccessService.updateRouteAccessByid(req);

      if (updated_route_access.modifiedCount === 0) {
        throw new Error("Unable to update route access, error occord");
      }

      res.json(updated_route_access);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiDeleteRouteAccess(req, res, next) {
    try {
      const route_access_id = req.params.id;
      const deleteResponse = await RouteAccessService.deleteRouteAccessByid(
        route_access_id
      );
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
