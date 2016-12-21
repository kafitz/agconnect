import React from 'react'
import renderer from 'react-test-renderer'

import { Sidebar } from '../reactjs/components/SidebarComponent'


test('Sidebar renders .header and .content DOM elements', () => {
    const testData = [
        {orderType: 'Buy', region: 'S. America', country: 'Peru', units: 15},
        {orderType: 'Buy', region: 'Africa', country: 'Kenya', units: 35},
        {orderType: 'Sell', region: 'C. America', country: 'Belize', units: 20}
    ]
    const component = renderer.create(
        <Sidebar recentOffers={testData} />
    )

    const tree = component.toJSON()
    expect(tree.children[0].props.className).toBe('header')
    expect(tree.children[1].props.className).toBe('content')
    expect(tree.children[1].children.length).toBe(3)
})
