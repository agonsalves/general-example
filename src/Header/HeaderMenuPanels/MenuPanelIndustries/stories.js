import MenuPanelIndustries from 'Header/HeaderMenuPanels/MenuPanelIndustries'
import React               from 'react'
import {
    Decorator as WithCustomProviders,
    MenuPanelDecorator
}                          from '../../../../.storybook/decorators/withCustomProviders'

const post = {
    post_name: 'people'
}

const industries = {
    id: 226,
    post_name: 'ada-defense-consulting',
    post_type: 'practice-area',
    slug: '/ada-defense-consulting'
}

export const menuPanelIndustriesStory = () => <MenuPanelIndustries industries={industries} post={post}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MenuPanelIndustries-${TYPE}`,
    component: MenuPanelIndustries,
    decorators: [
        (story) => <WithCustomProviders><MenuPanelDecorator>{story()}</MenuPanelDecorator></WithCustomProviders>
    ]
}