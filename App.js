const express = require("express");
const mongoose = require("mongoose");
const OrganisationRouter = require("./src/routers/organisation-router");
const LoginCredRouter = require("./src/routers/logincred-router");
const StopRouter = require("./src/routers/stop-router");
const RouteRouter = require("./src/routers/route-router");
const VehicleRouter = require("./src/routers/vehicle-router");
const DriverRouter = require("./src/routers/driver-router");
const SuperAdminRouter = require("./src/routers/superadmin-router");
const PassengerRouter = require("./src/routers/passenger-router");
const MembershipPlanRouter = require("./src/routers/membership-plan-router");
const SubscriptionRouter = require("./src/routers/subscription-router");
const RouteAccessRouter = require("./src/routers/route-access-router");

const app = express();
app.get("/", (req, res) => {
  res.sendStatus(200);
});
mongoose.connect("mongodb://localhost:27017/footmove", null, () => {
  app.use(express.json());
  app.use("/api/organisation", OrganisationRouter);
  app.use("/api/logincred", LoginCredRouter);
  app.use("/api/stop", StopRouter);
  app.use("/api/route", RouteRouter);
  app.use("/api/vehicle", VehicleRouter);
  app.use("/api/driver", DriverRouter);
  app.use("/api/superadmin", SuperAdminRouter);
  app.use("/api/passenger", PassengerRouter);
  app.use("/api/membershipplan", MembershipPlanRouter);
  app.use("/api/subscription", SubscriptionRouter);
  app.use("/api/routeaccess", RouteAccessRouter);
});

app.listen(process.env.PORT || "3000", (prop) => {
  console.log("App is listening.." + app.listenerCount());
});
