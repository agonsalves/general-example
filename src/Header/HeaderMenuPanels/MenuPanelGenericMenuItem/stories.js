import {boolean}                          from '@storybook/addon-knobs/dist/index'
import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../../.storybook/decorators/withCustomProviders'
import MenuPanelGenericMenuItem           from '../MenuPanelGenericMenuItem'

const post = {
    key: '/michael-b-adelman',
    post_name: 'michael-b-adelman',
    post_title: 'Michael B Adelman',
    post_type: 'person',
    microsite_pages: [
        {
            id: '3375',
            post_title: 'Publications',
            slug: '/michael-b-adelman/publications',
            microsite: '/michael-b-adelman'
        }
    ],
    slug: '/michael-b-adelman',
    parentPost: {
        alternate_phone_1: '(212) 666-9999'
    }
}
const item = {
    key: 3903,
    url: '#',
    ID: 3903,
    title: 'About The Firm',
    classes: [],
    type: 'post_type',
    post_name: '3903',
    target: ''
}
const itemWithChildren = {
    key: 4154,
    url: '#',
    ID: 3903,
    title: 'News & Insights',
    classes: [],
    type: 'post_type',
    post_name: '4154',
    target: '',
    children: [
        {
            key: 2347,
            url: '/news',
            ID: 2347,
            title: 'Firm News',
            classes: [],
            type: 'post_type',
            post_name: 'Firm News',
            post_title: 'Firm News',
            target: '',
        }
    ]
}


export const menuPanelFirmMenuItemStory = () =>
    <MenuPanelGenericMenuItem item={item} isSubMenuExpanded={false} post={post}/>

export const menuPanelFirmMenuChildrenItemStory = () =>
    <MenuPanelGenericMenuItem item={itemWithChildren} isSubMenuExpanded={boolean('isOpen?', false)} post={post}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MenuPanelGenericMenuItem-${TYPE}`,
    component: MenuPanelGenericMenuItem,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}
