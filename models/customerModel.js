const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  status: { type: String, default: "Active" }
});

module.exports = mongoose.model("Customer", customerSchema);
