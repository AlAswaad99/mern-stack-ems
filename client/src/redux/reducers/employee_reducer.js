import * as type from "../types"

const empinitialState = {
    employees: [],
    loading: false,
    error: null,
}

export default function employee_reducer(state = empinitialState, action) {
    switch (action.type) {
        case type.FETCH_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.FETCH_EMPLOYEES_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                employees: action.employees
            }
        case type.FETCH_EMPLOYEES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.DELETE_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.DELETE_EMPLOYEE_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.DELETE_EMPLOYEE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.ADD_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.ADD_EMPLOYEE_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.ADD_EMPLOYEE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.EDIT_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.EDIT_EMPLOYEE_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.EDIT_EMPLOYEE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.SEARCH_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.SEARCH_EMPLOYEE_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                employees: action.employees
            }
        case type.SEARCH_EMPLOYEE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state;

    }
}