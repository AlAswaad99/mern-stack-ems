import { combineReducers } from "redux";
import employee_reducer from "./employee_reducer";

const rootReducer = combineReducers({
    employees: employee_reducer
});

export default rootReducer;