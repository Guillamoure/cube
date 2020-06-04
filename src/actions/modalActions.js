import Store from '../store'

const { dispatch } = Store

export const setModal = (kind, data) => dispatch({type: "SET MODAL", kind, data })
