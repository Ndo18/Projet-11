import { PROFIL_USER } from "../actions/actions"


const initialState = {}

export default function userReducer(state = initialState, action) {
    switch(action.type){
        case PROFIL_USER:
            return {userInfos: action.payload}
        default:
            return state
            }
}