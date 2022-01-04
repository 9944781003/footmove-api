const mongoose = require("mongoose");
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const PassengerSchema = new mongoose.Schema(
  {
    pass_name: {
      type: String,
      required: true,
      minlength: 3,
    },
    pass_email: {
      type: String,
      required: true,
      unique: true,
      validate: (email_id) => emailPattern.test(email_id),
    },
    org_pass_id: {
      type: String,
      unique: true,
      minlength: 3,
    },
    login_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LoginCred",
      required: true,
    },
    org_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organisation",
      required: true,
    },
    route_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
      required: true,
    },
    stop_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stop",
      required: true,
    },
    account_status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(" Passenger", PassengerSchema);
