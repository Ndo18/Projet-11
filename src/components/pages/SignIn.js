import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser, profileUser } from "../../actions/actions"


function SignIn() {

  const form = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const token = useSelector((state) => state.loginReducer.token)
  const userInfos = useSelector((state) => state.userReducer.userInfos)

  const handleform = async(e) => {

    e.preventDefault()

    const postData = {
      email: form.current[0].value,
      password: form.current[1].value,
    }

    setLoading(true)

    dispatch(loginUser(postData))
    setLoading(false)
  }

  useEffect(() => {
    if(token){
      dispatch(profileUser({
          Authorization: `Bearer ${token}`
      }));
      if(userInfos){
        navigate('/user')
      }
    }
  },[dispatch, token, userInfos, navigate])

    return(
       <>
        <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form ref={form} onSubmit={e => handleform(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
          </div>
          {loading ? (
            <div>loading...</div>
          ) : (
            <div>test</div>
          )}
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <input type="submit" className="sign-in-button" value="Sign In"/>
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
          {/* <!--  --> */}
        </form>
      </section>
    </main>
       </>
    )
}
export default SignIn