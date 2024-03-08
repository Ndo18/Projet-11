import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUser } from "../actions/actions"
import '../style/Websitestyle.css'
import './compenentStyle/UsernameForm.css'

export function UsernameForm ({children, closeForm}) {
    
    const user = useSelector((state) => state.userReducer)
    const form = useRef()
    const token = useSelector((state) => state.loginReducer.token)
    const [editUsername, seteditUsername] = useState(user.userName)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    
    const handleEdit = async (e) => {
        e.preventDefault()
        
        const postData = {
            userName: editUsername,
        }
        
        if(editUsername === ""){
            setError("Please Enter a User name")
        } else {
            
            dispatch(editUser({
                Authorization: `Bearer ${token}`
            }, postData))
        }
        closeForm()
    }
    
    return (
        <>
        <h1>Edit user info</h1>
        <form ref={form} onSubmit={e => handleEdit(e)} className="Form">
        <label htmlFor="username">User name:</label>
        <input type="text" id="username" defaultValue={user.userName} onChange={e => seteditUsername(e.target.value)} />
        {error && <div className="editusername">{error}</div>}
        <label htmlFor="firstname">First name:</label>
        <input type="text" id="firstname" className="disabled" defaultValue={user.firstName} disabled/>
        <label htmlFor="lastname">Last name:</label>
        <input type="text" id="lastname" className="disabled" defaultValue={user.lastName} disabled/>
        <div>
        <input type="submit" value="Save" className="edit-button"/>
        {children}
        </div>
        </form>
        </>
        )
    }