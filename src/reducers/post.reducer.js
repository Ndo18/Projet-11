import { LOGIN, LOGOUT_USER } from "../actions/actions";

const initialState = {}

export default function loginReducer(state = initialState, action) {
    switch (action.type){
        case LOGIN:
            return {token :action.payload}
        case LOGOUT_USER:
            return action.payload
    default:
        return state
    }
}