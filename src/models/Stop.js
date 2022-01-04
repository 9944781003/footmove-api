const mongoose = require("mongoose");

const StopSchema = new mongoose.Schema(
  {
    stop_name: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
    route_id: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(" Stop", StopSchema);
