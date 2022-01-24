import MenuPanelGeneric from 'Header/HeaderMenuPanels/MenuPanelGeneric/index'
import React            from 'react'
import {
    firm,
    industries,
    people,
    services
}                       from '../../../../.storybook/data/headerData.js'
import {
    Decorator as WithCustomProviders,
    MenuPanelDecorator
}                       from '../../../../.storybook/decorators/withCustomProviders'

const menu = [people, services, industries, firm]
const microsite_pages =
    [
        {
            id: '3375',
            post_title: 'Publications',
            slug: '/michael-b-adelman/publications',
            microsite: '/michael-b-adelman'
        }
    ]

export const menuPanelFirmStory = () => <MenuPanelGeneric headerMenu={menu} post={microsite_pages} id={2338}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MenuPanelGeneric-${TYPE}`,
    component: MenuPanelGeneric,
    decorators: [
        (story) => <WithCustomProviders><MenuPanelDecorator>{story()}</MenuPanelDecorator></WithCustomProviders>
    ]
}