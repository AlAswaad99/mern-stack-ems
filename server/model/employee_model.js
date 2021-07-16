const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const Employee = Schema({
  
  Firstname: {
    type: String,
    required: [true, "Please Enter Firstname"],
    maxLength: [20, "Firstname must be less than 20 charaters"],
  },
  Middlename: {
    type: String,
    required: [true, "Please Enter Middlename"],
    maxLength: [20, "Middlename must be less than 20 charaters"],

  },
  Lastname: {
    type: String,
    required: [true, "Please Enter Lastname"],
    maxLength: [20, "Lastname must be less than 20 charaters"],

  },
  Gender: {
    type: String,
    required: [true, "Please Enter Gender"],
  },
  DOB: {
    type: Date,
    required: [true, "Please Enter Date"],
  },
  Salary: {
    type: Number,
    required: [true, "Please Enter Salary"],
    maxLength: [10, "Salary must be less than 10 digits"],

  },
});

module.exports = mongoose.model("Employee", Employee);