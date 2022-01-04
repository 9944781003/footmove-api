const { Schema, model } = require("mongoose");
const { LineString } = require("mongoose-geojson-schemas");
const RouteSchema = new Schema(
  {
    route_name: {
      type: String,
      required: true,
      minlength: 3,
    },
    route_status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },
    route_disctance: {
      type: String,
    },
    route_linestring: LineString,
    route_stops: [
      {
        type: Schema.Types.ObjectId,
        ref: "Stop",
      },
    ],
  },
  { timestamps: true }
);

module.exports = model(" Route", RouteSchema);
