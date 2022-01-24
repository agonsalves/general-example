import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../../../../.storybook/decorators/withCustomProviders'
import MobileMenuLink                     from './index'

const post =
    {
        microsite: '/michael-b-adelman',
        slug: '/'
    }
const item = {
    ID: 2356,
    title: 'Firm',
    url: '#',
    children: [
        {
            ID: 3918,
            url: '#',
            title: 'About The Firm',
        },
        {
            ID: 4124,
            url: '/contact-us',
            title: 'Contact Us',
        },
        {
            ID: 4119,
            url: '/careers',
            title: 'Careers',
        },
        {
            ID: 4227,
            url: '/case-studies',
            title: 'Case Studies',
        },
        {
            ID: 4227,
            url: '/events',
            title: 'Events',
        },
        {
            ID: 2359,
            url: '/news',
            title: 'News',
        },
        {
            ID: 2358,
            url: '/publications',
            title: 'Publications',
        },
        {
            ID: 4241,
            url: '/biologics-blog',
            title: 'Blog',
        },

    ]
}
const mobileMenuLinkData = {
    children: true,
    item: item,
    post: post,
    resetSubMenuToggle: true
}

export const mobileMenuLinkStory = () => <MobileMenuLink {...mobileMenuLinkData}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MobileMenuLink-${TYPE}`,
    component: MobileMenuLink,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}