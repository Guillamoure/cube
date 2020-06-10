import React from 'react'
import { withRouter } from 'react-router-dom'

const NavBar = props => {
  return (
    <nav id='navbar'>
      <li>Cube</li>
      <li>Sets</li>
      <li>Friends</li>
      <li>Start Game</li>
      <li onClick={() => props.history.push("/signin")}>Login</li>
    </nav>
  )
}

export default withRouter(NavBar)
