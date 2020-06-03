import { combineReducers } from 'redux'
import deckReducer from './deckReducer'
import cardReducer from './cardReducer'

const rootReducer = combineReducers({
  deckReducer,
  cardReducer
})

export default rootReducer
