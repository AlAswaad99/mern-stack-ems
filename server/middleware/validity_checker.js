const { validationResult } = require('express-validator');
const { check, checkSchema } = require('express-validator');
const { MALE, FEMALE } = require("../model/gender_model");

const validChecker = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}

var GenderChecker = {
  "Gender": {
    in: 'body',
    matches: {
      options: [[MALE,FEMALE]],
      errorMessage: "Invalid Gender"
    }
  }
}

const ValidationRules = [
  check('Firstname',"Invalid Name").isLength({min: 2, max: 20}).isString().custom(value => /^[a-zA-Z]{2,20}$/i.test(value)),
  check('Middlename',"Invalid Name").isLength({min: 2, max: 20}).isString().custom(value => /^[a-zA-Z]{2,20}$/i.test(value)),
  check('Lastname',"Invalid Name").isLength({min: 2, max: 20}).isString().custom(value => /^[a-zA-Z]{2,20}$/i.test(value)),
  checkSchema(GenderChecker),
  check('DOB',"Invalid  Date").trim().isDate(),
  check('Salary',"Invalid  Salary").isNumeric().isLength({min: 0, max: 10}),
  ];


module.exports = {validChecker, GenderChecker, ValidationRules};