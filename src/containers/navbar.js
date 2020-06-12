import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { signinFetch } from '../helper_methods/fetches/signin'
import { logout } from '../helper_methods/functions/logout'

const NavBar = props => {

  const activeUser = useSelector(state => state.userReducers.user)

  React.useEffect(() => {
    if (localStorage.username && !Object.keys(activeUser).length) {
      signinFetch(localStorage.username)
    }
  }, [activeUser])

  const renderLogin = () => {
    return activeUser.username ? activeUser.username : "Login"
  }

  return (
    <nav id='navbar'>
      <li>Cube</li>
      <li>Sets</li>
      <li>Friends</li>
      <li>Start Game</li>
      <li onClick={() => props.history.push("/signin")}>{renderLogin()}</li>
      {activeUser.username && <li onClick={logout}>Logout</li>}
    </nav>
  )
}

export default withRouter(NavBar)
