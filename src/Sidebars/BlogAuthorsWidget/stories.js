import React             from 'react'
import {
    Decorator as WithCustomProviders,
    SidebarDecorator
}                        from '../../../.storybook/decorators/withCustomProviders'
import BlogAuthorsWidget from '../BlogAuthorsWidget'

const thumbnail_teaser = {
    height: '185',
    url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/01/Allegretta_E_Thumb-default-headshot-closeup-headshot-photo-163.jpg',
    width: '185'
}

const blogAuthors = [
    {
        id: 34,
        post_title: 'Michael B Adelman',
        thumbnail_teaser,
        slug: '/michael-b-adelman'
    },
    {
        id: 163,
        post_title: 'Erica Allegretta',
        slug: 'erica-allegretta'
    }
]

const blogAuthorsWidgetData = {
    blogAuthors: blogAuthors,
    widgetTitle: 'Contributing Authors'
}

export const blogAuthorsWidget = () =>
    <BlogAuthorsWidget {...blogAuthorsWidgetData} />

const TYPE = 'snapshot'
export default {
    title: `Sidebars/BlogAuthorsWidget-${TYPE}`,
    component: BlogAuthorsWidget,
    decorators: [
        (story) => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}