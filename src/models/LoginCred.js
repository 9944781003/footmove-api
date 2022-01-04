const mongoose = require("mongoose");

//Minimum eight characters, at least one letter and one number:
passwordPatternLow = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//Minimum eight characters, at least one letter, one number and one special character:
/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

const LoginCredSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastlogin_timestamp: {
      type: Number,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LoginCred", LoginCredSchema);
