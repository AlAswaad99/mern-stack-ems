import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { removeEmployee } from "../redux/actions/employee_action";
import { EmployeeContext } from "./EmployeeComponent";
import moment from "moment";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addEmployee } from "../redux/actions/employee_action";
import { FaCheckCircle, FaUser, FaTrash, FaPen } from "react-icons/fa";

toast.configure();
const Card = (CardProps) => {
  const dispatch = useDispatch();

  const { handleToBeUpdatedEmployeeState } = useContext(EmployeeContext);

  const toBeUpdatedEmpSelected = (emp) => {
    emp.DOB = moment(emp.DOB).format("YYYY-MM-DD");
    handleToBeUpdatedEmployeeState(emp);
  };

  const deleteEmployee = (emp) => {
    console.log(emp.Firstname);
    dispatch(removeEmployee(emp));
    showUndoToast(emp);
  };

  const showUndoToast = (emp, closeToast) => {
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
          <u onClick={closeToast}>Close</u>
        </div>
      </div>,
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
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
        <h5
          className="Employee-Name"
          onClick={() => {
            toBeUpdatedEmpSelected(CardProps.employee);
          }}
        >
          Name: {CardProps.employee.Firstname} {CardProps.employee.Middlename}{" "}
          {CardProps.employee.Lastname}
        </h5>
        <p className="Employee-Gender">
          {" "}
          <strong>Genger:</strong> {CardProps.employee.Gender}
        </p>
        <p className="Employee-DOB">
          {" "}
          <strong>Date of Birth:</strong>{" "}
          {moment(CardProps.employee.DOB).format("DD-MM-YYYY")}
        </p>
      </div>
      <div className="Employee-Salary">
        <p className="Employee-Salary">
          {" "}
          <strong>Salary:</strong> {CardProps.employee.Salary} Birr
        </p>
      </div>
      <div className="Card-Buttons">
        <button
          className="editButton"
          onClick={() => {
            toBeUpdatedEmpSelected(CardProps.employee);
          }}
        >
          <FaPen />{" "}
        </button>

        <button
          className="deleteButton"
          onClick={() => {
            deleteEmployee(CardProps.employee);
          }}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Card;
