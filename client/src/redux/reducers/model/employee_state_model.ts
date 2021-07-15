import { EmployeeModel } from "../../../model/Employee_Model";

export type EmployeeState = {
  employees: EmployeeModel[];
  loading: boolean;
  error: string;
};

export type SingleEmployeeState = {
  selectedEmployee: EmployeeModel;
};
