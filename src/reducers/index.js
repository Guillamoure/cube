import { combineReducers } from 'redux'
import libraryReducer from './libraryReducer'
import cardReducer from './cardReducer'
import handReducer from './handReducer'
import fieldReducers from './fieldReducers'

const rootReducer = combineReducers({
  libraryReducer,
  cardReducer,
  handReducer,
  fieldReducers
})

export default rootReducer
