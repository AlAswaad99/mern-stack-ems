import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_EMPLOYEE_FAILED, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESSFUL, DELETE_EMPLOYEE_FAILED, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESSFUL, EDIT_EMPLOYEE_FAILED, EDIT_EMPLOYEE_REQUEST, EDIT_EMPLOYEE_SUCCESSFUL, FETCH_EMPLOYEES_FAILED, FETCH_EMPLOYEES_REQUEST, FETCH_EMPLOYEES_SUCCESSFUL, SEARCH_EMPLOYEE_FAILED, SEARCH_EMPLOYEE_REQUEST, SEARCH_EMPLOYEE_SUCCESSFUL } from "../types";
import { GetDataFromAPI, AddEmployee, DeleteEmployee, EditEmployee, SearchEmployeeByName } from "../services/employee_services";


function* fetchEmployees() {
    try {
        const employees = yield call(GetDataFromAPI);

        yield put({ type: FETCH_EMPLOYEES_SUCCESSFUL, employees: employees });
    }
    catch (e) {

        yield put({ type: FETCH_EMPLOYEES_FAILED, message: e.message });
    }
}

function* addEmployee(action) {
    try {
        const message = yield call(AddEmployee, action.payload);

        yield put({ type: ADD_EMPLOYEE_SUCCESSFUL, message: message });

        const employees = yield call(GetDataFromAPI);
        yield put({ type: FETCH_EMPLOYEES_SUCCESSFUL, employees: employees });

    }
    catch (e) {

        yield put({ type: ADD_EMPLOYEE_FAILED, message: e.message });
    }
}

function* editEmployee(action) {
    try {
        const message = yield call(EditEmployee, action.payload);

        yield put({ type: EDIT_EMPLOYEE_SUCCESSFUL, message: message });

        const employees = yield call(GetDataFromAPI);
        yield put({ type: FETCH_EMPLOYEES_SUCCESSFUL, employees: employees });

    }
    catch (e) {

        yield put({ type: EDIT_EMPLOYEE_FAILED, message: e.message });
    }
}

function* deleteEmployee(action) {
    try {
        const message = yield call(DeleteEmployee, action.payload);

        yield put({ type: DELETE_EMPLOYEE_SUCCESSFUL, message: message });

        const employees = yield call(GetDataFromAPI);
        yield put({ type: FETCH_EMPLOYEES_SUCCESSFUL, employees: employees });

    }
    catch (e) {

        yield put({ type: DELETE_EMPLOYEE_FAILED, message: e.message });
    }
}

function* searchEmployeeByName(action) {
    try {
        const employees = yield call(SearchEmployeeByName, action.payload);

        yield put({ type: SEARCH_EMPLOYEE_SUCCESSFUL, employees: employees });


    }
    catch (e) {

        yield put({ type: SEARCH_EMPLOYEE_FAILED, message: e.message });
    }
}







export function* getEmployeeSaga() {
    yield takeEvery(FETCH_EMPLOYEES_REQUEST, fetchEmployees);

}
export function* deleteEmployeeSaga() {
    yield takeEvery(DELETE_EMPLOYEE_REQUEST, deleteEmployee);

}
export function* addEmployeeSaga() {
    yield takeEvery(ADD_EMPLOYEE_REQUEST, addEmployee);

}
export function* editEmployeeSaga() {
    yield takeEvery(EDIT_EMPLOYEE_REQUEST, editEmployee);

}
export function* searchEmployeeByNameSaga() {
    yield takeEvery(SEARCH_EMPLOYEE_REQUEST, searchEmployeeByName);

}





