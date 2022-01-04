const mongoose = require("mongoose");
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const SubscriptionSchema = new mongoose.Schema(
  {
    sub_date: {
      type: Number,
      default: Date.now,
    },
    sub_status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "INACTIVE",
    },
    org_id: {
      type: mongoose.Types.ObjectId,
      ref: "Organisation",
    },
    plan_id: {
      type: mongoose.Types.ObjectId,
      ref: "MembershipPlan",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscription", SubscriptionSchema);
