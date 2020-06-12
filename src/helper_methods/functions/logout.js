import { removeUser } from '../../actions/userActions'

export const logout = () => {
  removeUser()
  localStorage.removeItem("username")
  localStorage.removeItem("_id")
}
