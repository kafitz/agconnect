import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './exchangeActions'
import { styles } from './exchangeStyles.scss'


@connect(
    state => state.surveyProfile,
    dispatch => bindActionCreators(actions, dispatch)
)
export default class ExchangeAppContainer extends Component {
    static propTypes = {}

    render() {
        return(
            <div className="container">
                <p>Hello!</p>
            </div>
        )
    }
}
