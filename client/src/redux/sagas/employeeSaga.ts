import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import {
  ADD_EMPLOYEE_FAILED,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESSFUL,
  DELETE_EMPLOYEE_FAILED,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESSFUL,
  EDIT_EMPLOYEE_FAILED,
  EDIT_EMPLOYEE_REQUEST,
  EDIT_EMPLOYEE_SUCCESSFUL,
  EMPLOYEE_SELECTED_FOR_EDIT,
  EMPLOYEE_SELECTION_CLEARED,
  EMPLOYEE_SELECTION_REQUEST,
  FETCH_EMPLOYEES_FAILED,
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESSFUL,
  SEARCH_EMPLOYEE_FAILED,
  SEARCH_EMPLOYEE_REQUEST,
  SEARCH_EMPLOYEE_SUCCESSFUL,
} from "../types";
import { EmployeeModel } from "../../model/Employee_Model";
import { ActionModel } from "../reducers/model/action_model";
import {
  AddEmployee,
  DeleteEmployee,
  EditEmployee,
  EmployeeDeselected,
  EmployeeSelected,
  GetDataFromAPI,
  SearchEmployeeByName,
} from "../services/employee_services";

function* fetchEmployees(): any {
  try {
    const employees = yield call(GetDataFromAPI);
    yield put({
      type: FETCH_EMPLOYEES_SUCCESSFUL,
      payload: employees,
    } as ActionModel);
  } catch (_e) {
    const e: Error = _e;
    console.log(e.message);
    console.log("this is not");
    yield put({ type: FETCH_EMPLOYEES_FAILED, message: e.message });
  }
}

function* addEmployee(action: ActionModel): any {
  try {
    const message = yield call(AddEmployee, action.payload);
    // console.log(action.empName)
    console.log(action.payload);
    console.log("coming here at generator of addition");
    // console.log(message);
    yield put({ type: ADD_EMPLOYEE_SUCCESSFUL, message: message });

    const employees = yield call(GetDataFromAPI);
    yield put({
      type: FETCH_EMPLOYEES_SUCCESSFUL,
      payload: employees,
    } as ActionModel);
  } catch (_e) {
    const e: Error = _e;
    console.log(e.message);
    console.log("this is not");
    yield put({ type: ADD_EMPLOYEE_FAILED, message: e.message });
  }
}

function* editEmployee(action: ActionModel): any {
  try {
    const message = yield call(EditEmployee, action.payload);
    // console.log(action.empName)
    console.log(action.payload);
    console.log("coming here at generator of editing");
    // console.log(message);
    yield put({ type: EDIT_EMPLOYEE_SUCCESSFUL, message: message });

    const employees = yield call(GetDataFromAPI);
    yield put({
      type: FETCH_EMPLOYEES_SUCCESSFUL,
      payload: employees,
    } as ActionModel);
  } catch (_e) {
    const e: Error = _e;
    console.log(e.message);
    console.log("this is not");
    yield put({ type: EDIT_EMPLOYEE_FAILED, message: e.message });
  }
}

function* deleteEmployee(action: ActionModel): any {
  try {
    const message = yield call(DeleteEmployee, action.payload);
    // console.log(action.empName)
    console.log(action.payload);
    console.log("coming here at generator of deletion");
    // console.log(message);
    yield put({ type: DELETE_EMPLOYEE_SUCCESSFUL, message: message });

    const employees = yield call(GetDataFromAPI);
    yield put({
      type: FETCH_EMPLOYEES_SUCCESSFUL,
      payload: employees,
    } as ActionModel);
  } catch (e) {
    console.log("this is not");

    yield put({ type: DELETE_EMPLOYEE_FAILED, message: e.message });
  }
}

function* searchEmployeeByName(action: ActionModel): any {
  try {
    const employees = yield call(SearchEmployeeByName, action.payload);
    // console.log(action.empName)
    console.log(action.payload);
    console.log("coming here at generator of getting by name");
    // console.log(message);
    yield put({
      type: SEARCH_EMPLOYEE_SUCCESSFUL,
      payload: employees,
    } as ActionModel);

    // const employees = yield call(GetDataFromAPI);
    // yield put({type: FETCH_EMPLOYEES_SUCCESSFUL, employees: employees});
  } catch (e) {
    console.log("this is not");

    yield put({ type: SEARCH_EMPLOYEE_FAILED, message: e.message });
  }
}

function* selectEmployee(action: ActionModel): any {
  const employee = yield call(EmployeeSelected, action.payload);
  // console.log(action.empName)
  console.log(action.payload);
  console.log("coming here at generator of selecting employee");
  // console.log(message);
  yield put({
    type: EMPLOYEE_SELECTED_FOR_EDIT,
    payload: employee,
  } as ActionModel);

  // const employees = yield call(GetDataFromAPI);
  // yield put({type: FETCH_EMPLOYEES_SUCCESSFUL, employees: employees});
}

function* deselectEmployee(): any {
    const employee = yield call(EmployeeDeselected);
    // console.log(action.empName)
    // console.log(action.payload);
    console.log("coming here at generator of deselecting employee");
    // console.log(message);
    yield put({
      type: EMPLOYEE_SELECTION_CLEARED,
      payload: employee,
    } as ActionModel);
  
    // const employees = yield call(GetDataFromAPI);
    // yield put({type: FETCH_EMPLOYEES_SUCCESSFUL, employees: employees});
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
export function* selectEmployeeSaga() {
  yield takeEvery(EMPLOYEE_SELECTION_REQUEST, selectEmployee);
}
export function* deselectEmployeeSaga() {
    yield takeEvery(EMPLOYEE_SELECTION_CLEARED, deselectEmployee);
  }
// export getEmployeeSaga;
// export deleteEmployeeSaga;
