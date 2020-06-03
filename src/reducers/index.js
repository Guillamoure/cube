import { combineReducers } from 'redux'
import libraryReducer from './libraryReducer'
import cardReducer from './cardReducer'
import handReducer from './handReducer'

const rootReducer = combineReducers({
  libraryReducer,
  cardReducer,
  handReducer
})

export default rootReducer
