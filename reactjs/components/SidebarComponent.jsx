import React, { Component, PropTypes } from 'react'

import { styles } from './sidebarStyles.scss'


export class Sidebar extends Component {
    static propTypes = {
        recentOffers: PropTypes.array.isRequired
    }

    render() {
        const offersJSX = this.props.recentOffers.map((offer, i) => {
            return <OfferRow key={i} {...offer} />
        })

        return(
            <section className={`${styles}`} >
                <div className="header">
                    <div className="header-title">
                        Latest Offers
                    </div>
                    <div className="sidebar-label">
                        Region / Country / Units
                    </div>
                </div>

                <div className="content">
                    { offersJSX }
                </div>
            </section>
        )
    }
}


class OfferRow extends Component {
    static propTypes = {
        orderType: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        units: PropTypes.number.isRequired
    }

    render() {
        const { orderType, region, country, units } = this.props
        const rowTypeAttribute = orderType.toLowerCase() == 'buy' ? 'row-buy' : 'row-sell',
              rowDescription = region + ' / ' + country + ' / ' + units

        return(
            <div className="pure-g row">
                <div className={"pure-u-1-3 " + rowTypeAttribute}>{ orderType }</div>
                <div className="pure-u-2-3 row-content">{ rowDescription }</div>
            </div>
        )
    }
}
