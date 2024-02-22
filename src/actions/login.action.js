import axios from "axios"

export const LOGIN = "LOGIN"

export const loginUser = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data).then((res) => {
            dispatch({type: LOGIN, payload: res.data.body.token })
        })
    }
}