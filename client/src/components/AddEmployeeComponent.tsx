import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  clearSelectedEmployee,
  editEmployee,
} from "../redux/actions/employee_action";
import { EmployeeModel } from "../model/Employee_Model";
import { Error, validateGender } from "./ErrorComponent";
import { toast, Zoom } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import moment from "moment";
import "tippy.js/dist/tippy.css";
import { SingleEmployeeState } from "../redux/reducers/model/employee_state_model";
import { RootState } from "../redux/reducers/reducer_index";

toast.configure();
const AddEmployeeForm = () => {
  const selectedEmployee = useSelector<
    RootState,
    SingleEmployeeState["selectedEmployee"]
  >((state) => state.single_employee_state.selectedEmployee);

  const initialEmployeeInfoState: EmployeeModel = {
    _id: "",
    Firstname: "",
    Middlename: "",
    Lastname: "",
    Gender: "Select Gender",
    DOB: "",
    Salary: "",
  };

  var {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,

  } = useForm({ mode: "onSubmit", reValidateMode: "onSubmit", defaultValues: initialEmployeeInfoState }, );

  useEffect(() => {
    if (selectedEmployee !== null) {
      console.log("this is he useeffect selected employee");
      console.log(selectedEmployee);
      console.log(selectedEmployee.DOB);
      reset(selectedEmployee);
    } 
  }, [selectedEmployee]);

  const dispatch = useDispatch();

  const onSubmit = (data: EmployeeModel) => {
    if (data._id === "" || data._id === undefined) {      
      dispatch(addEmployee(data));
      showSubmitToast("Employee Added Successfully");
    } else {
      dispatch(editEmployee(data));
      showSubmitToast("Employee Updated Successfully");
    }
    clearInput();
  };

  const showSubmitToast = (msg: string) => {
    toast.success(
      <div className="Toast-Body">
        <div className="Toast-Message">
          <FaCheckCircle />
          <p>{msg}</p>
        </div>
      </div>,
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false,
        transition: Zoom,
      }
    );
  };

  const clearInput = () => {
    clearErrors();
    reset(initialEmployeeInfoState);
    // dispatch(clearSelectedEmployee());
  };

  return (
    <div className="submit-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div className="label-div">
            <label htmlFor="title">Full Name</label>
          </div>
          <div id="input-div">
            <div className="name-div">
              <input
                type="text"
                {...register("Firstname", {
                  required: "Firstname Required",
                  pattern: {
                    value: /^[a-zA-Z]{2,20}$/i,
                    message:
                      "Firstname must be 2 - 20 alphabet-characters-only long",
                  },
                })}
                name="Firstname"
                inputMode="text"
                placeholder="First Name"
              />
              <Error errors={errors.Firstname} />
            </div>

            <div className="name-div">
              <input
                type="text"
                id="Middlename"
                inputMode="text"
                placeholder="Middle Name"
                {...register("Middlename", {
                  required: "Middlename Required",
                  pattern: {
                    value: /^[a-zA-Z]{2,20}$/i,
                    message:
                      "Middlename must be 2 - 20 alphabet-characters-only long",
                  },
                })}
              />
              <Error errors={errors.Middlename} />
            </div>

            <div className="name-div">
              <input
                type="text"
                id="Lastname"
                inputMode="text"
                placeholder="Last Name"
                {...register("Lastname", {
                  required: "Lastname Required",
                  pattern: {
                    value: /^[a-zA-Z]{2,20}$/i,
                    message:
                      "Lastname must be 2 - 20 alphabet-characters-only long",
                  },
                })}
              />
              <Error errors={errors.Lastname} />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="label-div">
            <label htmlFor="title">Gender</label>
          </div>
          <div id="input-div">
            <div className="gender-div">
              <div className="gender-select-div">
                <select
                  id="Gender-Select"
                  {...register("Gender", {
                    required: "Select Gender",
                    validate: (value: string) =>
                      validateGender(value) || "Select Gender",
                  })}
                >
                  <option
                    value="Select Gender"
                    defaultValue="Select Gender"
                    id="Gender-Placeholder"
                  >
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <Error errors={errors.Gender} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="label-div">
            <label htmlFor="title">Date of Birth</label>
          </div>
          <div id="input-div">
            <div className="date-div">
              <input
                type="date"
                id="DOB"
                placeholder="Select Date"
                min="2000-01-01"
                max={moment().format("YYYY-MM-DD")}
                {...register("DOB", { required: "Select Date" })}
              />

              <Error errors={errors.DOB} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="label-div">
            <label htmlFor="title">Salary</label>
          </div>
          <div id="input-div">
            <div className="salary-div">
              <input
                type="number"
                id="Salary"
                inputMode="numeric"
                placeholder="Salary"
                {...register("Salary", {
                  required: "Salary Required",
                  pattern: {
                    value: /^[0-9]{0,10}$/i,
                    message: "Salary must be non-negative and less than 10 digits",
                    
                  },
                  
                })}
              />
              <Error errors={errors.Salary} />
            </div>
          </div>
        </div>

        <button className="submitButton" type="submit" name="submit">
          S u b m i t
        </button>

        <button className="clearButton" onClick={clearInput} type="reset">
          C l e a r
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
