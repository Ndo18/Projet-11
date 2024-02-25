import { LOGIN } from "../actions/actions";

const initialState = {}

export default function loginReducer(state = initialState, action) {
    switch (action.type){
        case LOGIN:
            return {token :action.payload}
    default:
        return state
    }
}