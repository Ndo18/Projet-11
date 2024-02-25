import { useSelector } from "react-redux"

export function UsernameForm () {

    const user = useSelector((state) => state.userReducer.userInfos)

    return (
        <>
            <h1>Edit user info</h1>
        <form>
            <label htmlFor="username">User name:</label>
            <input type="text" id="username"/>
            <label htmlFor="firstname">First name:</label>
            <input type="text" id="firstname" defaultValue={user.firstName} disabled/>
            <label htmlFor="lastname">Last name:</label>
            <input type="text" id="lastname" defaultValue={user.lastName} disabled/>
            <button>Save</button>
            <button>Cancel</button>
        </form>
        </>
    )
}