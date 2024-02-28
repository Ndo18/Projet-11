import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUser } from "../actions/actions"

export function UsernameForm ({children}) {

    const user = useSelector((state) => state.userReducer)
    const form = useRef()
    const token = useSelector((state) => state.loginReducer.token)
    const [editUsername, seteditUsername] = useState(user.userName)
    const dispatch = useDispatch()

    const handleEdit = async (e) => {
        e.preventDefault()

        const postData = {
            userName: editUsername,
        }

        dispatch(editUser({
            Authorization: `Bearer ${token}`
        }, postData))
    }

    return (
        <>
            <h1>Edit user info</h1>
        <form ref={form} onSubmit={e => handleEdit(e)}>
            <label htmlFor="username">User name:</label>
            <input type="text" id="username" onChange={e => seteditUsername(e.target.value)} />
            <label htmlFor="firstname">First name:</label>
            <input type="text" id="firstname" defaultValue={user.firstName} disabled/>
            <label htmlFor="lastname">Last name:</label>
            <input type="text" id="lastname" defaultValue={user.lastName} disabled/>
            <input type="submit" value="Save" />
            {children}
        </form>
        </>
    )
}