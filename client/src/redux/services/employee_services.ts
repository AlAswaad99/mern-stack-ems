import Axios from "axios"
import moment from "moment";
import { EmployeeModel } from "../../model/Employee_Model";
// import dotenv from "dotenv";
// import env from "react-dotenv";

// dotenv.config();
export const GetDataFromAPI = async () =>{
    try{
        console.log(`${process.env.REACT_APP_SERVER_BASE_URL}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_EMPLOYEE_ROUTE}`);
        // const res = await Axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_EMPLOYEE_ROUTE}`);
        const res = await Axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}:${process.env.PORT}/${process.env.REACT_APP_EMPLOYEE_ROUTE}`);
        const data = await res.data;
        if(res.status === 200){
            data.sort((a: EmployeeModel,b: EmployeeModel) => a.Firstname.toLowerCase().localeCompare(b.Firstname.toLowerCase()));
            data.forEach((emp: EmployeeModel) => {
                emp.DOB=moment(emp.DOB).format("YYYY-MM-DD")
            });
            return data;
        }
    }catch(e){ 
        console.error(e);
        return [];

    }
    
}

export const DeleteEmployee =  async (employee: EmployeeModel) =>{
    try{
        

        // const url = `${process.env.REACT_APP_SERVER_BASE_URL}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_EMPLOYEE_ROUTE}delete/${employee._id}`;
        const url = `${process.env.REACT_APP_SERVER_BASE_URL}:${process.env.PORT}/${process.env.REACT_APP_EMPLOYEE_ROUTE}delete/${employee._id}`;
        const res = await Axios.delete(url);
        const data = await res.data;

       
        if(res.status === 200){
            return data;
        }
    }catch(e){
        console.error(e)
    }
    
}

export const AddEmployee =  async (employee: EmployeeModel) =>{
    try{
        // const url = `${process.env.REACT_APP_SERVER_BASE_URL}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_EMPLOYEE_ROUTE}register`;
        const url = `${process.env.REACT_APP_SERVER_BASE_URL}:${process.env.PORT}/${process.env.REACT_APP_EMPLOYEE_ROUTE}register`;
        const res = await Axios.post(url,employee);
        const data = await res.data;

        
        if(res.status === 200){
            return data;
        }
    }catch(e){
        console.error(e)
    }
    
}

export const EditEmployee =  async (employee: EmployeeModel) =>{
    try{
        // const url = `${process.env.REACT_APP_SERVER_BASE_URL}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_EMPLOYEE_ROUTE}update/${employee._id}`;
        const url = `${process.env.REACT_APP_SERVER_BASE_URL}:${process.env.PORT}/${process.env.REACT_APP_EMPLOYEE_ROUTE}update/${employee._id}`;
        const res = await Axios.put(url,employee);
        const data = await res.data;

        
        if(res.status === 200){
            return data;
        }
    }catch(e){
        console.error(e)
    }
    
}

export const SearchEmployeeByName =  async (empName: string) =>{
    try{    
        // const url = `${process.env.REACT_APP_SERVER_BASE_URL}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_EMPLOYEE_ROUTE}${empName}`;
        const url = `${process.env.REACT_APP_SERVER_BASE_URL}:${process.env.PORT}/${process.env.REACT_APP_EMPLOYEE_ROUTE}${empName}`;
        const res = await Axios.get(url);
        const data = await res.data;

        
        if(res.status === 200){
            data.sort((a: EmployeeModel,b: EmployeeModel) => a.Firstname.toLowerCase().localeCompare(b.Firstname.toLowerCase()))

            return data;
        }
    }catch(e){
        console.error(e)
    }
    
}

export const EmployeeSelected =  (emp: EmployeeModel) => { return emp;}
export const EmployeeDeselected =  () => {return null;}
