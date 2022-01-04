const SubscriptionService = require("../services/subscription-service");

module.exports = class SubscriptionController {
  static async apiGetAllSubscriptions(req, res, next) {
    try {
      const subscriptions = await SubscriptionService.getAllSubscriptions();
      if (!subscriptions) {
        res.status(404).json("There are no subscriptions published yet!");
      }
      res.json(subscriptions);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetsubscriptionsById(req, res, next) {
    try {
      let id = req.params.id || {};
      const subscription = await SubscriptionService.getSubscriptionByid(id);
      res.json(subscription);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCreateSubscription(req, res, next) {
    try {
      const createdSubscription = await SubscriptionService.createSubscription(
        req.body
      );
      res.json(createdSubscription);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiUpdateSubscription(req, res, next) {
    try {
      const updatedSubscription =
        await SubscriptionService.updateSubscriptionByid(req);

      if (updatedSubscription.modifiedCount === 0) {
        throw new Error("Unable to update vehicle, error occord");
      }

      res.json(updatedSubscription);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiDeleteSubscription(req, res, next) {
    try {
      const subscriptionId = req.params.id;
      const deleteResponse = await SubscriptionService.deleteSubscriptionByid(
        subscriptionId
      );
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
