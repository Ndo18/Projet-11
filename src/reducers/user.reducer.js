import { EDIT_USER, PROFIL_USER } from "../actions/actions"


const initialState = {}

export default function userReducer(state = initialState, action) {
    switch(action.type){
        case PROFIL_USER:
            return {...state, ...action.payload}
        case EDIT_USER:
            return {...state, ...action.payload.userName}
        default:
            return state
            }
}