import Axios from "axios"
import moment from "moment";
import { EmployeeModel } from "../../model/Employee_Model";
// import dotenv from "dotenv";
// import env from "react-dotenv";

// dotenv.config();
export const GetDataFromAPI = async () =>{
    try{
        // console.log(`/employee/`);
        // console.log(`${process.env.NODE_ENV}`);        
        // console.log(`${process.env.PORT}`);        
        // const res = await Axios.get(`/employee/`);
        const res = await Axios.get(`/employee/`);
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
        

        // const url = `/employee/delete/${employee._id}`;
        const url = `/employee/delete/${employee._id}`;
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
        // const url = `/employee/register`;
        const url = `/employee/register`;
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
        // const url = `/employee/update/${employee._id}`;
        const url = `/employee/update/${employee._id}`;
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
        // const url = `/employee/${empName}`;
        const url = `/employee/${empName}`;
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
