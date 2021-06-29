import Axios from "axios";



export const GetDataFromAPI = async () => {
    try {
        const res = await Axios.get("http://localhost:5000/employee/");
        const data = await res.data;
        if (res.status === 200) {
            data.sort((a, b) => a.Firstname.toLowerCase().localeCompare(b.Firstname.toLowerCase()))
            return data;
        }
    } catch (e) {
        console.error(e)
    }

}

export const DeleteEmployee = async (employee) => {
    try {
        const res = await Axios.delete(`http://localhost:5000/employee/delete/${employee._id}`);


        const data = await res.data;



        if (res.status === 200) {

            return data;
        }
    } catch (e) {
        console.error(e)
    }

}

export const AddEmployee = async (employee) => {
    try {


        const res = await Axios.post(`http://localhost:5000/employee/register`, employee);


        const data = await res.data;



        if (res.status === 200) {

            return data;
        }
    } catch (e) {
        console.error(e)
    }

}

export const EditEmployee = async (employee) => {
    try {



        const res = await Axios.put(`http://localhost:5000/employee/update/${employee._id}`, employee);


        const data = await res.data;



        if (res.status === 200) {

            return data;
        }
    } catch (e) {
        console.error(e)
    }

}

export const SearchEmployeeByName = async (empName) => {
    try {



        const res = await Axios.get(`http://localhost:5000/employee/${empName}`);


        const data = await res.data;



        if (res.status === 200) {
            return data;
        }
    } catch (e) {
        console.error(e)
    }

}

