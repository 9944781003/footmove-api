const mongoose = require("mongoose");
const DriverSchema = new mongoose.Schema(
  {
    driver_name: {
      type: String,
      required: true,
    },
    phone_primary: {
      type: String,
      unique: true,
      required: true,
      minlength: 10,
    },
    login_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "LoginCred",
    },
    org_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "organisation",
    },
    vehicle_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      unique: true,
    },
    route_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Driver", DriverSchema);
