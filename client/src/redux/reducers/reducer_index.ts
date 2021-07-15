import { combineReducers } from "redux";
import { ActionModel } from "./model/action_model";
import {employee_reducer} from "./employee_reducer";
import { EmployeeState } from "./model/employee_state_model";
import { employee_selected_reducer } from "./selected_employee_reducer";

export const rootReducer = combineReducers({
    employee_state: employee_reducer,
    single_employee_state: employee_selected_reducer,
});

export type RootState = ReturnType<typeof rootReducer>
