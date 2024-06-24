import {getItem, KEY_ACCESS_TOKEN,} from "./localStorageManager.js"
// import dotenv from 'dotenv';
import axios from 'axios';
// dotenv.config();

// const baseURL = process.env.SERVER_BASE_URI;
const baseURL = 'http://localhost:4000';


export  function axiosSignup(data){
 return axios.post(`${baseURL}/employee/signup`,data);
}


export async function axiosLogin(data){
    return await axios.post(`${baseURL}/employee/login`,data);
}

export async function axiosCreateStudent(data){
    const token =   getItem(KEY_ACCESS_TOKEN);
    return  axios.post(`${baseURL}/task/create`,data,{headers:{authorization:`Bearer ${token}`}});

}

export async function axiosDownloadCSV(){
    const token =   getItem(KEY_ACCESS_TOKEN);
    const res = await axios.get(`${baseURL}/employee/csv`,{headers:{authorization:`Bearer ${token}`}});
    console.log(res);

}