import logoArgentbank from '../assets/img/argentBankLogo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import './stylesComponent/Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../actions/actions'
import { persistor } from '../store'

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userInfos = useSelector((state) => state.userReducer.userInfos)

  //Deconnexion
  const handlesignOut = async(e) =>{
    e.preventDefault()
    
    dispatch(logoutUser())

    persistor.purge()

    navigate('/')
  }

    return (
<nav className="main-nav">
  <NavLink className="main-nav-logo" to="/">
      <img
        className="main-nav-logo-image"
        src={logoArgentbank}
        alt="Argent Bank Logo"
      />
    </NavLink>
    <div>
    
      { !userInfos && <NavLink className="main-nav-item" to="/Sign-In">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>}
      { userInfos &&<NavLink to='/' onClick={e => handlesignOut(e)}>
      <NavLink id='RouterNavLink' to='/user'><i className="fa fa-user-circle"></i>{userInfos.userName}</NavLink>
          <i className="fa fa-sign-out"></i>
           Sign Out
        </NavLink>}
    </div>
</nav>
    )
}
export default Header