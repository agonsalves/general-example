import MenuPanelIndustryItem from 'Header/HeaderMenuPanels/MenuPanelIndustryItem'
import React                 from 'react'
import {
    Decorator as WithCustomProviders,
    MenuPanelDecorator
}                            from '../../../.storybook/decorators/withCustomProviders'

const thumbnail_teaser = {
    alt: '',
    height: '98',
    width: '160',
    url: 'http://mako2-admin.gjtest.com/content/uploads/2020/05/photo1-default-industry-thumbnail-industry-thumbnail-226.jpg',
}

const industry = {
    id: 226,
    post_name: 'ada-defense-consulting',
    post_type: 'practice-area',
    slug: '/ada-defense-consulting',
    thumbnail_teaser: thumbnail_teaser
}
const postSelected = {
    post_name: 'ada-defense-consulting'
}
const post = {
    post_name: 'art'
}

export const menuPanelIndustryItemSelectedStory = () =>
    <MenuPanelIndustryItem industry={industry} post={postSelected}/>

export const menuPanelIndustryItemStory = () =>
    <MenuPanelIndustryItem industry={industry} post={post}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MenuPanelIndustryItem-${TYPE}`,
    component: MenuPanelIndustryItem,
    decorators: [
        (story) => <WithCustomProviders><MenuPanelDecorator>{story()}</MenuPanelDecorator></WithCustomProviders>
    ]
}