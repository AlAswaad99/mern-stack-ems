import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeEmployee,
  selectEmployeeForEdit,
} from "../redux/actions/employee_action";
import { EmployeeModel } from "../model/Employee_Model";
import moment from "moment";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addEmployee } from "../redux/actions/employee_action";
import { FaCheckCircle, FaUser, FaPen, FaTrash } from "react-icons/fa";


toast.configure();
const Card = (CardProps: EmployeeModel) => {
  const dispatch = useDispatch();


  const deleteEmployee = (emp: EmployeeModel) => {
    dispatch(removeEmployee(emp));
    showUndoToast(emp);
  };

  const selectEmployee = (emp: EmployeeModel) => {
    dispatch(selectEmployeeForEdit(emp));
  };

  const showUndoToast = (emp: EmployeeModel) => {
    toast.info(
      <div className="Toast-Body">
        <div className="Toast-Message">
          <FaCheckCircle />
          <p>Employee Removed Successfully!!!</p>
        </div>
        <div className="Toast-Action">
          <u
            onClick={() => {
              dispatch(addEmployee(emp));
            }}
          >
            Undo
          </u>
          <p> </p>
          <u>Close</u>
        </div>
      </div>,
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false,
        transition: Zoom,
      }
    );
  };

  return (
    <div className="Card">
      <div className="Employee-Icon">
        <FaUser />
      </div>
      <div className="Employee-Personal-Info">
        <h5 className="Employee-Name">
          Name: {CardProps.Firstname} {CardProps.Middlename}{" "}
          {CardProps.Lastname}
        </h5>
        <p className="Employee-Gender">
          {" "}
          <strong>Genger:</strong> {CardProps.Gender}
        </p>
        <p className="Employee-DOB">
          {" "}
          <strong>Date of Birth:</strong>{" "}
          {moment(CardProps.DOB).format("DD-MM-YYYY")}
        </p>
      </div>
      <div className="Employee-Salary">
        <p className="Employee-Salary">
          {" "}
          <strong>Salary:</strong> {CardProps.Salary} Birr
        </p>
      </div>
      <div className="Card-Buttons">
        <button
          className="editButton"
          onClick={() => {
            selectEmployee(CardProps);
          }}
        >
          <FaPen />{" "}
        </button>

        <button
          className="deleteButton"
          onClick={() => {
            deleteEmployee(CardProps);
          }}
        >
          <FaTrash />
        </button>
      </div>
      </div>
  );
};

export default Card;
