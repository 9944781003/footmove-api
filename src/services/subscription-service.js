const SubscriptionModel = require("../models/Subscription");

module.exports = class SubscriptionService {
  static async getAllSubscriptions() {
    try {
      const allSubscription = await SubscriptionModel.find();
      return allSubscription;
    } catch (error) {
      console.log(`Could not fetch subscriptions ${error}`);
    }
  }
  static async createSubscription(data) {
    try {
      const response = await SubscriptionModel.create(data);
      return response;
    } catch (error) {
      console.log(`Could not fetch subscriptions ${error}`);
    }
  }
  static async getSubscriptionByid(subscriptionId) {
    try {
      const singleSubscriptionResponse = await SubscriptionModel.findById(
        subscriptionId
      );
      return singleSubscriptionResponse;
    } catch (error) {
      console.log(`Could not fetch subscriptions ${error}`);
    }
  }
  static async updateSubscriptionByid(req) {
    try {
      const updateResponse = await SubscriptionModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      return updateResponse;
    } catch (error) {
      console.log(`Could not fetch subscriptions ${error}`);
    }
  }
  static async deleteSubscriptionByid(subscriptionId) {
    try {
      const deleteResponse = await SubscriptionModel.deleteOne({
        _id: subscriptionId,
      });
      return deleteResponse;
    } catch (error) {
      console.log(`Could not fetch subscriptions ${error}`);
    }
  }
};
