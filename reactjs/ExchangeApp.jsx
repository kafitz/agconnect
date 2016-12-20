import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers'
import ExchangeContainer from './containers/ExchangeAppContainer'


let finalCreateStore = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

let reducer = combineReducers(reducers),
    store = finalCreateStore(reducer)


class ExchangeApp extends Component {
    render() {
        return(
            <Provider store={store}>
                <ExchangeContainer />
            </Provider>
        )
    }
}

render(<ExchangeApp />, document.getElementById('ExchangeApp'))
