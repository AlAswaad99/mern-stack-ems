import * as type from "../types"

export function fetchEmployees(employees){
    return{
        type: type.FETCH_EMPLOYEES_REQUEST,
        payload: employees
    }
}

export function addEmployee(employee){
    return{
        type: type.ADD_EMPLOYEE_REQUEST,
        payload: employee
    }
}

export function editEmployee(employee){
    return{
        type: type.EDIT_EMPLOYEE_REQUEST,
        payload: employee
    }
}

export function removeEmployee(employee){
    console.log(employee)
    return{
        type: type.DELETE_EMPLOYEE_REQUEST,
        payload: employee
    }
}

export function searchEmployeeByName(Firstname){
    console.log(Firstname)
    return{
        type: type.SEARCH_EMPLOYEE_REQUEST,
        payload: Firstname
    }
}

