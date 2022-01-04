const LoginCredModel = require("../models/LoginCred");
const bcrypt = require("bcrypt");
module.exports = class LoginCredService {
  static async getLoginCreds() {
    try {
      const allLoginCreds = await LoginCredModel.find();
      return allLoginCreds;
    } catch (error) {
      console.log(`Could not fetch logincreds ${error}`);
    }
  }
  static async createLoginCred(data) {
    try {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
      const response = await LoginCredModel.create(data);
      return response;
    } catch (error) {
      console.log(`Could not fetch logincreds ${error}`);
    }
  }
  static async getLoginCredByid(loginCredId) {
    try {
      const singleLoginCredResponse = await LoginCredModel.findById(
        loginCredId
      );
      return singleLoginCredResponse;
    } catch (error) {
      console.log(`Could not fetch logincreds ${error}`);
    }
  }
  static async updateLoginCredByid(req) {
    try {
      const updateResponse = await LoginCredModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not fetch logincreds ${error}`);
    }
  }
  static async deleteLoginCredByid(loginCredId) {
    try {
      const deleteResponse = await LoginCredModel.deleteOne({
        _id: loginCredId,
      });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not fetch logincreds ${error}`);
    }
  }
};
