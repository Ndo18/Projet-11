import { useRef } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../../actions/login.action"


function SignIn() {

  const form = useRef()
  const dispatch = useDispatch()
  const handleform = async(e) => {
    e.preventDefault()

    console.log(form.current);

    const postData = {
      'Content-type': 'application/json',
      email: form.current[0].value,
      password: form.current[1].value,
    }

    dispatch(loginUser(postData))

  }
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
            <label htmlFor="password">Password</label
            ><input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
          </div>
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