import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers'
import ExchangeAppContainer from './containers/Exchange/ExchangeAppContainer'


let finalCreateStore = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
let store = finalCreateStore(reducer)


class ExchangeApp extends Component {
    render() {
        return(
            <Provider store={store}>
                <ExchangeAppContainer />
            </Provider>
        )
    }
}

render(<ExchangeApp />, document.getElementById('ExchangeApp'))
