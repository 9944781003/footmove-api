const mongoose = require("mongoose");
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const SuperAdminSchema = new mongoose.Schema(
  {
    sa_name: {
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
      minlength: 10,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuperAdmin", SuperAdminSchema);
