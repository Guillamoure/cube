import { combineReducers } from 'redux'
import libraryReducer from './libraryReducer'
import cardReducer from './cardReducer'
import handReducer from './handReducer'
import fieldReducers from './fieldReducers'
import modalReducers from './modalReducers'
import graveyardReducers from './graveyardReducers'
import userReducers from './userReducers'
import gameReducer from './gameReducer'

const rootReducer = combineReducers({
  libraryReducer,
  cardReducer,
  handReducer,
  fieldReducers,
  modalReducers,
  graveyardReducers,
  userReducers
})

export default rootReducer
