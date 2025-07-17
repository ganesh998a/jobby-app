import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const {history} = props

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="website-logo"
          alt="website logo"
        />
      </Link>
      <ul className="mobile-nav-menu">
        <li className="list-item">
          <Link to="/" className="link">
            <AiFillHome className="icon" />
          </Link>
        </li>
        <li className="list-item">
          <Link to="/jobs" className="link">
            <BsFillBriefcaseFill className="icon" />
          </Link>
        </li>
        <li className="list-item">
          <button
            type="button"
            className="mobile-logout-btn"
            onClick={onClickLogout}
          >
            <FiLogOut className="icon" />
          </button>
        </li>
      </ul>
      <ul className="desktop-nav-menu">
        <li className="desktop-nav-item">
          {' '}
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="desktop-nav-item">
          <Link className="link" to="/jobs">
            Jobs
          </Link>
        </li>
      </ul>
      <button onClick={onClickLogout} type="button" className="logout-btn">
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
