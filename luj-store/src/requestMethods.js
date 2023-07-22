import axios from "axios";

export const BASE_URL = "http://localhost:4000/api"

let gg = ""

if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken){
    gg = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
} else { gg = ""}

// const gg = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
const TOKEN = gg

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN || ""}`}
})