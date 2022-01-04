const mongoose = require("mongoose");
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const OrganisationSchema = new mongoose.Schema(
  {
    org_name: {
      type: String,
      required: true,
      minlength: 3,
    },
    email_id: {
      type: String,
      required: true,
      unique: true,
      validate: (email_id) => emailPattern.test(email_id),
    },
    phone_primary: {
      type: String,
      required: true,
      minlength: 10,
      unique: true,
    },
    phone_secondary: {
      type: String,
      minlength: 10,
    },
    address_line1: {
      type: String,
    },
    address_line2: {
      type: String,
    },
    area: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    pincode: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Organisation", OrganisationSchema);
