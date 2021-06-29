import { all } from "redux-saga/effects";
import { addEmployeeSaga, deleteEmployeeSaga, editEmployeeSaga, getEmployeeSaga, searchEmployeeByNameSaga } from "./employeeSaga";

export default function* rootSaga(){
    yield all([
        getEmployeeSaga(),
        deleteEmployeeSaga(),
        addEmployeeSaga(),
        editEmployeeSaga(),
        searchEmployeeByNameSaga(),
    ]);
}

