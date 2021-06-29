import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchEmployees,
  searchEmployeeByName,
} from "../redux/actions/employee_action";
import Card from "./CardComponent";
import AddEmployeeForm from "./AddEmployeeComponent";
import { Styles } from "../styles/Styles";
import { Header } from "../styles/Header";
import { ToastContainer } from "react-toastify";

export const EmployeeContext = React.createContext({});
export const DeletedEmployeeContext = React.createContext({});

const Employee = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const employees = useSelector((state) => state.employees.employees);
  const loading = useSelector((state) => state.employees.loading);
  const errors = useSelector((state) => state.employees.errors);

  useEffect(() => {
    if (searchText === "") {
      dispatch(fetchEmployees());
    } else {
      dispatch(searchEmployeeByName(searchText));
    }

    
  }, [searchText]);

  const [currentToBeUpdatedEmployeeState, setcurrentToBeUpdatedEmployeeState] =
    useState(null);

  const handleToBeUpdatedEmployeeState = (selectedEmp) => {
    setcurrentToBeUpdatedEmployeeState(selectedEmp);
  };

  const contextValue = {
    handleToBeUpdatedEmployeeState,
    currentToBeUpdatedEmployeeState,
  };

  const handleInputChanged = (e) => {
    const searchTitle = e.target.value;
    setSearchText(searchTitle);
  };

  return (
    <EmployeeContext.Provider value={contextValue}>
      <Header>
        <h2>MERN - Employee Management System</h2>
        <div className="searchArea">
          <label htmlFor="title">Search</label>
          <input
            type="text"
            className="searchText"
            value={searchText}
            onChange={handleInputChanged}
          ></input>
        </div>
      </Header>

      <Styles>
        <ToastContainer bodyClassName="Undo-Toast-Body" />

        <div className="employeesResult">
          {employees.length === 0 && <p>No Employees Available</p>}
          {employees.loading && (
            <div>
              <p>Loading...</p>
            </div>
          )}
          {employees.length > 0 &&
            employees.map((emp) => <Card employee={emp} key={emp._id} />)}
          {errors && !loading && <p>{errors}</p>}
        </div>
        <AddEmployeeForm EmployeeProps={currentToBeUpdatedEmployeeState} />
      </Styles>
    </EmployeeContext.Provider>
  );
};

export default Employee;
