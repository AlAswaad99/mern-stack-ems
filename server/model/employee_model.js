const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const Employee = Schema({
  ID: {
    type: String,
  },
  Firstname: {
    type: String,
    required: true,
  },
  Middlename: {
    type: String,
    required: true,
  },
  Lastname: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  Salary: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Employee", Employee);