import React from 'react'
import { withRouter } from 'react-router-dom'
import { signinFetch } from '../helper_methods/fetches/signin'
import { useSelector } from 'react-redux'

const Signin = props => {

  const activeUser = useSelector(state => state.userReducers.user)

  const [username, setUsername] = React.useState("")

  React.useEffect(() => {
    if (Object.keys(activeUser).length) {
      localStorage.setItem("username", activeUser.username)
      localStorage.setItem("_id", activeUser._id)
      props.history.push("/")
    }
  }, [activeUser])

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
