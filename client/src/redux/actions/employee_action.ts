import * as type from "../types";
import { EmployeeModel } from "../../model/Employee_Model";
import { ActionModel } from "../reducers/model/action_model";

export function fetchEmployees() {
  const action = {
    type: type.FETCH_EMPLOYEES_REQUEST,
  } as ActionModel;
  return action;
}

export function addEmployee(employee: EmployeeModel) {
  return {
    type: type.ADD_EMPLOYEE_REQUEST,
    payload: employee,
  } as ActionModel;
}

export function editEmployee(employee: EmployeeModel) {
  return {
    type: type.EDIT_EMPLOYEE_REQUEST,
    payload: employee,
  } as ActionModel;
}

export function removeEmployee(employee: EmployeeModel) {
  // console.log(employee);
  return {
    type: type.DELETE_EMPLOYEE_REQUEST,
    payload: employee,
  } as ActionModel;
}

export function searchEmployeeByName(Firstname: string) {
  // console.log(Firstname);

  return {
    type: type.SEARCH_EMPLOYEE_REQUEST,
    payload: Firstname,
  } as ActionModel;
}

export function selectEmployeeForEdit(employee: EmployeeModel) {
  // console.log(employee);
  return {
    type: type.EMPLOYEE_SELECTED_FOR_EDIT,
    payload: employee,
  } as ActionModel;
}

export function clearSelectedEmployee() {
  return {
    type: type.EMPLOYEE_SELECTION_CLEARED,
  } as ActionModel;
}
