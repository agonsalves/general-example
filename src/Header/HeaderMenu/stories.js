import React                              from 'react'
import {
    firm,
    industries,
    people,
    services
}                                         from '../../../.storybook/data/headerData.js'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import HeaderMenu                         from './index'

const menu = [
    {
        people,
        services,
        industries,
        firm
    }
]

export const headerMenu = () => <HeaderMenu menu={menu}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/HeaderMenu-${TYPE}`,
    component: HeaderMenu,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}