import axios from "axios"

export const LOGIN = "LOGIN"
export const LOGOUT_USER = "LOGOUT_USER"
export const PROFIL_USER = "PROFIL_USER"
export const EDIT_USER = "EDIT_USER"

export const loginUser = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data).then((res) => {
            if(res.status === 200){
                dispatch({type: LOGIN, payload: res.data.body.token })
                console.log(res);
            }
        })
    }
}

export const profileUser = (headers, data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/profile", data, { headers }).then((res) => {
            dispatch({type: PROFIL_USER, payload: res.data.body})
        })
    }
}

export const editUser = (headers, data) => {
    return (dispatch) => {
        return axios.put(`http://localhost:3001/api/v1/user/profile/`,data, { headers }).then((res) => {
            dispatch({type: EDIT_USER, payload: data})
        })
    }
}

export const logoutUser = () => ({
    type : LOGOUT_USER, payload : {}
})