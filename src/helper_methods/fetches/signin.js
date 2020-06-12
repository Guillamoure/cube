import { expressURL } from '../variables'
import { addUser } from '../../actions/userActions'

export const signinFetch = (username) => {
  fetch(`${expressURL}/signin`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Response': 'application/json'
    },
    body: JSON.stringify({username})
  })
  // fetch(`${expressURL}/users`)
    .then(r => r.json())
    .then(user => {
      addUser(user)
    })
}
