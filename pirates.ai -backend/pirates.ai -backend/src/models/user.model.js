const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
   // required:true,
    default:"CUSTOMER"
  },
  paymentInformation: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment_information",
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
