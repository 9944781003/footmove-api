const mongoose = require("mongoose");
const VehicleSchema = new mongoose.Schema(
  {
    vehicle_number: {
      type: String,
      required: true,
    },
    reg_number: {
      type: String,
      required: true,
    },
    vehicle_type: {
      type: String,
      default: "BUS",
    },
    vehicles_status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);
