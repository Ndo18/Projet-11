import { LOGIN, PROFIL_USER } from "../actions/login.action";

const initialState = {}

export default function loginReducer(state = initialState, action) {
    switch (action.type){
        case LOGIN:
            return {...state, token :action.payload}
        case PROFIL_USER:
            return {...state, test: action.payload}
    default:
        return state
    }
}