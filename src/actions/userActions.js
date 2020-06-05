import Store from '../store'

const { dispatch } = Store

export const addUser = (user) => dispatch({type: "ADD USER", user })
