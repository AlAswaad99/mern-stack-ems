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
import { useMediaQuery } from 'react-responsive';
import { EmployeeModel } from "../model/Employee_Model";
import {
  EmployeeState,
  SingleEmployeeState,
} from "../redux/reducers/model/employee_state_model";
import { RootState } from "../redux/reducers/reducer_index";

const Employee = () => {
  const isBelow750px = useMediaQuery({
    query: '(max-width: 750px)'
  })
  const isBelow450px = useMediaQuery({
    query: '(max-width: 450px)'
  })

  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  const employees = useSelector<RootState, EmployeeState["employees"]>(
    (state) => state.employee_state.employees
  );
  const loading = useSelector<RootState, EmployeeState["loading"]>(
    (state) => state.employee_state.loading
  );
  const errors = useSelector<RootState, EmployeeState["error"]>(
    (state) => state.employee_state.error
  );

  // console.log("this is the employees from emp comp");
  // console.log(employees);
  useEffect(() => {
    if (searchText === "") {
      dispatch(fetchEmployees());
    } else {
      dispatch(searchEmployeeByName(searchText));
    }
  }, [searchText]);

  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTitle = e.target.value;
    setSearchText(searchTitle);
  };

  return (
    <>
      <Header>
        <h1>{isBelow750px && !isBelow450px && "MERN - EMS"} {isBelow450px && ""} {!isBelow750px && !isBelow450px && "MERN - Employee Management System"}</h1>
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

        <section>        <div className="employeesResult">
        {employees === undefined && <p>No Connection!! Please Try Again!!</p>}
          {loading && (
            <div>
              <p>Loading...</p>
            </div>
          )}
          {employees !== undefined && employees.length > 0 &&
            employees.map((emp: EmployeeModel) => (
              <Card {...emp} key={emp._id} />
            ))}

          {employees.length === 0 && !loading && <p>No Employees Available</p>}
          {errors && !loading && <p>{errors}</p>}
        </div>
        <AddEmployeeForm />
        </section>

      </Styles>
    </>
  );
};

export default Employee;
