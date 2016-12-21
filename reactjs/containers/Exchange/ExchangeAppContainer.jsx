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

        // temp props
        let recentOffers = [
            { orderType: 'Buy', region: 'S. America', country: 'Peru', units: 10 },
            { orderType: 'Sell', region: 'Africa', country: 'Ethiopia', units: 5 },
            { orderType: 'Buy', region: 'Asia', country: 'Vietnam', units: 20 },
            { orderType: 'Buy', region: 'N. America', country: 'Hawaii', units: 15 },
            { orderType: 'Sell', region: 'S. America', country: 'Brazil', units: 30 },
            { orderType: 'Sell', region: 'C. America', country: 'Honduras', units: 10 },
            { orderType: 'Sell', region: 'Africa', country: 'Kenya', units: 15 },
            { orderType: 'Buy', region: 'S. America', country: 'Bolivia', units: 10 },
            { orderType: 'Sell', region: 'C. America', country: 'Belize', units: 5 },
        ]


        return(
            <div className="root" className={`${styles}`}>
                <div className="menu" />

                <div className="pure-g container">
                    <div className="pure-u-1-4 sidebar">
                        <Sidebar recentOffers={recentOffers} />
                    </div>

                    <div className="pure-u-3-4 map">
                        <Mapper />
                    </div>
                </div>
            </div>
        )
    }
}
