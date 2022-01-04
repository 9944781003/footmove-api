const mongoose = require("mongoose");

const RouteAccessSchema = new mongoose.Schema(
  {
    pass_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Passenger",
    },
    route_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
    },
    stop_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stop",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(" RouteAccess", RouteAccessSchema);
