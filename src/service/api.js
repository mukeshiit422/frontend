import axios from 'axios'

const url='http://localhost:8000';
export const addUser=async(data)=>{
    try{
       await axios.post(`${url}/addUser`,data);
    }
    catch(e){
       console.log("error while adding user",e.message);
    }
}
export const getAllUsers=async()=>{
    try{
       const res=await axios.get(`${url}/getAllUsers`);
       return res.data;
    }
    catch(e){
       console.log("No user Found",e.message);
    }
}