import {BASE_URL} from "./base_url"
import axios from "axios"


export const getAllUsers = async ()=>{
    let globaldata
    await axios.get(`${BASE_URL}/users`).then((res)=>{
        globaldata = res.data
    })
    return globaldata
}
export const getUserById = async (id)=>{
    let globaldata
    await axios.get(`${BASE_URL}/users/${id}`).then((res)=>{
        globaldata = res.data
    })
    return globaldata
}
export const deleteUser = async (id)=>{
    await axios.delete(`${BASE_URL}/users/${id}`)
}

export const postUser = (payload) => {
  axios.post(`${BASE_URL}/users`, payload);
};

export const editUser = (id,payload)=>{
    axios.put(`${BASE_URL}/users/${id}`,payload);
  }
























