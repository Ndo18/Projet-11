import { EDIT_USER, LOGOUT_USER, PROFIL_USER } from "../actions/actions"


const initialState = {}

export default function userReducer(state = initialState, action) {
    switch(action.type){
        case PROFIL_USER:
            return {...state, ...action.payload}
        case EDIT_USER:
            return {...state, userName: action.payload.userName}
        case LOGOUT_USER:
            return action.payload
        default:
            return state
            }
}