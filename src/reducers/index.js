import { combineReducers } from 'redux'
import libraryReducer from './libraryReducer'
import cardReducer from './cardReducer'
import handReducer from './handReducer'
import fieldReducers from './fieldReducers'
import modalReducers from './modalReducers'

const rootReducer = combineReducers({
  libraryReducer,
  cardReducer,
  handReducer,
  fieldReducers,
  modalReducers
})

export default rootReducer
