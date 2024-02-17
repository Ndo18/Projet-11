import logoArgentbank from '../assets/img/argentBankLogo.png'
import { NavLink } from 'react-router-dom'
import './stylesComponent/Header.css'

function Header() {
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
      {/* <NavLink className="main-nav-item" to=""></NavLink> */}
      <a class="main-nav-item" href="./sign-in.html">
        <i class="fa fa-user-circle"></i>
        Sign In
      </a>
    </div>
</nav>
    )
}
export default Header