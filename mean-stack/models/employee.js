const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  office: {
    type: String,
  },
  salary: {
    type: Number,
  },
  timestamp: {},
});

module.expo;

module.exports = mongoose.model("Employee", employeeSchema);
