import Store from '../store'

const { dispatch } = Store

export const setModal = (kind, data, coordinates) => dispatch({type: "SET MODAL", kind, data, coordinates })
