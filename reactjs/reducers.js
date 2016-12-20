import { combineReducers } from 'redux'
import { exchangeReducer } from './containers/Exchange/exchangeReducer'

const rootReducer = combineReducers({
    exchange: exchangeReducer
})

export default rootReducer
