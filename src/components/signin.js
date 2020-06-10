import React from 'react'
import { withRouter } from 'react-router-dom'
import { signinFetch } from '../helper_methods/fetches/signin'

const Signin = props => {

  const [username, setUsername] = React.useState("")

  const signin = (e) => {
    e.preventDefault()
    signinFetch(username)
  }

  return (
    <form id="signin-form" onSubmit={signin}>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
      <button>Sign In</button>
    </form>
  )
}

export default withRouter(Signin)
