const express = require("express");
const Employee = require("../model/employee_model");
const cors = require("cors");


const router = express.Router();


router.route("/").get(cors(), (req, res) => {
  Employee.find((err, result) => {
    if (err) return res.json(err);
    return res.send(result);
  });
});

router.route("/:Firstname").get(cors(), (req, res) => {
  Employee.find({ Firstname: { "$regex": req.params.Firstname, "$options": "i" }, "$orderby": { Firstname: -1 } }, (err, result) => {
    if (err) return res.json(err);
    result.sort();
    return res.send(result);
  });
});


router.options('/register', cors())
router.route("/register").post(cors(), async (req, res) => {
  const employee = new Employee({
    Firstname: req.body.Firstname,
    Middlename: req.body.Middlename,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
    DOB: req.body.DOB,
    Salary: req.body.Salary,
  });

  const empexists = await checkEmployeeExistence(employee);

  if (empexists) {
    return res.send("Employee Already Exists");

  }
  employee
    .save()
    .then(() => {
      console.log("employee registered");
      res.status(200).json({ msg: "Employee Successfully Registered" });
    })
    .catch((err) => {
      res.status(403).json({ msg: err });
      console.log(err)
    });
});



router.options('/update/:_id', cors())
router.route("/update/:_id").put(cors(), (req, res) => {
  Employee.findOneAndUpdate(
    { _id: req.params._id },
    {
      $set: {
        Firstname: req.body.Firstname,
        Middlename: req.body.Middlename,
        Lastname: req.body.Lastname,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        MOB: req.body.MOB,
        YOB: req.body.YOB,
        Salary: req.body.Salary,
      }
    },
    (err, result) => {
      if (err) return res.status(500).json({ msg: err });
      const msg = {
        msg: "Employee successfully updated",
        Firstname: req.body.Firstname,
        Middlename: req.body.Middlename,
        Lastname: req.body.Lastname,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        MOB: req.body.MOB,
        YOB: req.body.YOB,
        Salary: req.body.Salary,
      };
      return res.json(msg);
    }
  );

});
router.options('/delete/:_id', cors())
router.route("/delete/:_id").delete(cors(), (req, res) => {
  console.log(req.params._id);
  Employee.findOneAndDelete({ _id: req.params._id }, (err, result) => {

    if (err) return res.send(err);
    return res.send(result);
  });

});

const checkEmployeeExistence = async (emp) => {
  const res = await Employee.findOne({ Firstname: emp.Firstname, Middlename: emp.Middlename, Lastname: emp.Lastname, });

  if (res === null) {
    return false;
  }
  return true;

}




module.exports = router;