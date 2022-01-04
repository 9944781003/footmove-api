const LoginCredService = require("../services/logincred-service");

module.exports = class LoginCredController {
  static async apiGetAllLoginCreds(req, res, next) {
    try {
      const logincreds = await LoginCredService.getLoginCreds();

      if (!logincreds) {
        res.status(404).json("There are no logincreds published yet!");
      }
      res.json(logincreds);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetLoginCredById(req, res, next) {
    try {
      let id = req.params.id || {};
      const logincred = await LoginCredService.getLoginCredByid(id);
      res.json(logincred);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCreateLoginCred(req, res, next) {
    try {
      const createdLoginCred = await LoginCredService.createLoginCred(req.body);
      res.json(createdLoginCred);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiUpdateLoginCred(req, res, next) {
    try {
      const updatedLoginCred = await LoginCredService.updateLoginCredByid(req);

      if (updatedLoginCred.modifiedCount === 0) {
        throw new Error("Unable to update logincred, error occord");
      }

      res.json(updatedLoginCred);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiDeleteLoginCred(req, res, next) {
    try {
      const loginCredId = req.params.id;
      const deleteResponse = await LoginCredService.deleteLoginCredByid(
        loginCredId
      );
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
