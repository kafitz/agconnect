import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './exchangeActions'
import { styles } from './exchangeStyles.scss'

import { Sidebar } from 'components/SidebarComponent'
import { Mapper } from 'components/MapperComponent'


@connect(
    state => {
        return state.exchange
    },
    dispatch => bindActionCreators(actions, dispatch)
)
export default class ExchangeAppContainer extends Component {
    static propTypes = {}

    render() {
        return(
            <div className="root" className={`${styles}`}>
                <div className="pure-g container">
                    <div className="pure-u-1-4 sidebar">
                        <Sidebar />
                    </div>

                    <div className="pure-u-3-4 map">
                        <Mapper />
                    </div>
                </div>
            </div>
        )
    }
}
