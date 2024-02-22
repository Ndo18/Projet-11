import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../actions/login.action"
import { useNavigate } from "react-router-dom"
// import userReducer from "../../reducers/post.reducer"


function SignIn() {

  const form = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.loginReducer.token)

  // useEffect(() => {
  //   if (token) {
  //     navigate('/user')
  //   }
  // }, [token, navigate])

  const handleform = async(e) => {
    e.preventDefault()
    navigate('/user')
    
    console.log(token);
    // console.log(form.current);

    const postData = {
      email: form.current[0].value,
      password: form.current[1].value,
    }

    // dispatch(userReducer())
    dispatch(loginUser(postData))

    // {token
    //   ? navigate('/user')
    //   : console.log("erreur");
    // }
    
    
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
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
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