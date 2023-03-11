import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();


const instance = axios.create({
    baseURL:"",
    headers:{

    },
    withCredentials: true

})



export {}