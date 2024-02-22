import axios from "axios"

export const LOGIN = "LOGIN"
export const PROFIL_USER = "PROFIL_USER"

export const loginUser = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data).then((res) => {
            dispatch({type: LOGIN, payload: res.data.body.token })
            console.log("eee",res)
        })
    }
}

export const profileUser = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/profile", data).then((res) => {
            dispatch({type: PROFIL_USER, payload: res.data })
            console.log("hhd", res)
        })
    }
}