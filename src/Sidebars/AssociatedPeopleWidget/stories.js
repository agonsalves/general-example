import {object} from '@storybook/addon-knobs'
import React from 'react'
import {Decorator as WithCustomProviders, SidebarDecorator} from '../../../.storybook/decorators/withCustomProviders'
import AssociatedPeopleWidget from '../AssociatedPeopleWidget'

const people = [
    {
        email: 'acavanaugh@milesstockbridge.com',
        id: 143,
        post_name: 'anthony-f-cavanaugh',
        post_title: 'Anthony F Cavanaugh',
        post_type: 'person',
        slug: '/anthony-f-cavanaugh',
        thumbnail_teaser: {
            url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/09/Headshot-185-default-headshot-closeup-headshot-photo-133.jpg',
            width: 185,
            height: 185
        }
    },
    {
        email: 'blahblah@milesstockbridge.com',
        id: 144,
        post_name: 'john-e-smith',
        post_title: 'John Simon Supercalifragilistic ',
        post_type: 'person',
        slug: '/john-e-smith'
    },
]

const morePeople = [
    ...people,
    {
        email: 'gkjrglkrhg@milesstockbridge.com',
        id: 145,
        post_name: 'susan-l-kennedy',
        post_title: 'Susan L Kennedy',
        post_type: 'person',
        slug: '/susan-l-kennedy'
    }
]

export const twoPeopleStory = () => <AssociatedPeopleWidget people={object('people data', people)}/>
export const morePeopleStory = () => <AssociatedPeopleWidget people={object('people data', morePeople)}/>

const TYPE = 'snapshot'
export default {
    title: `Sidebars/AssociatedPeopleWidget-${TYPE}`,
    component: AssociatedPeopleWidget,
    decorators: [
        story => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}