import { EmployeeModel } from "../../model/Employee_Model";
import * as type from "../types";
import { ActionModel } from "./model/action_model";
import { SingleEmployeeState } from "./model/employee_state_model";

const selectedempinitialstate = {
  selectedEmployee: {} as EmployeeModel,
};

export const employee_selected_reducer = (
  state: SingleEmployeeState = selectedempinitialstate,
  action: ActionModel
) => {
  switch (action.type) {
    case type.EMPLOYEE_SELECTED_FOR_EDIT:
      return {
        ...state,
        selectedEmployee: action.payload,
      };
    case type.EMPLOYEE_SELECTION_CLEARED:
      return {
        ...state,
        selectedEmployee: null,
      };
    default:
      return state;
  }
};
