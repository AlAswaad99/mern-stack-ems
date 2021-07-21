import { EmployeeModel } from "../../model/Employee_Model";
import * as type from "../types";
import { ActionModel } from "./model/action_model";
import { EmployeeState } from "./model/employee_state_model";


const empinitialState = {
  employees: [],
  loading: false,
  error: "",
  selectedEmployee: {} as EmployeeModel
};

export const employee_reducer =  (
  state: EmployeeState = empinitialState,
  action: ActionModel
) => {
  switch (action.type) {
    case type.FETCH_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      } ;
    case type.FETCH_EMPLOYEES_SUCCESSFUL:
      // console.log("this is payload from reducer");
      // console.log(action.payload);
      return {
        ...state,
        loading: false,
        employees: action.payload,
      } ;
    case type.FETCH_EMPLOYEES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      } as EmployeeState;
    case type.DELETE_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.DELETE_EMPLOYEE_SUCCESSFUL:
      return {
        ...state,
        loading: false,
      };
    case type.DELETE_EMPLOYEE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case type.ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.ADD_EMPLOYEE_SUCCESSFUL:
      return {
        ...state,
        loading: false,
      };
    case type.ADD_EMPLOYEE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case type.EDIT_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.EDIT_EMPLOYEE_SUCCESSFUL:
      return {
        ...state,
        loading: false,
      };
    case type.EDIT_EMPLOYEE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case type.SEARCH_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.SEARCH_EMPLOYEE_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        employees: action.payload,
      };
    case type.SEARCH_EMPLOYEE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    
    default:
      return state;
  }
}
