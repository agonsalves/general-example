import {object} from '@storybook/addon-knobs'
import React from 'react'
import {Decorator as WithCustomProviders, SidebarDecorator} from '../../../.storybook/decorators/withCustomProviders'
import KeyContactsWidget from '../KeyContactsWidget'

const contacts =
    [
        {
            thumbnail_teaser: {
                url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/09/Headshot-185-default-headshot-closeup-headshot-photo-133.jpg',
                width: 185,
                height: 185
            },
            post_title: 'Benjamin S. Akley',
            email: 'bakley@pryorcashman.com',
            position: [{
                id: 33,
                term: 'Director'
            }],
            phone: '212.234.2345',
            slug:'/benjamin-s-akley'
        },
        {
            thumbnail_teaser: {
                url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/09/Headshot-185-default-headshot-closeup-headshot-photo-133.jpg',
                width: 185,
                height: 185
            },
            post_title: 'Perry M Amsellem',
            email: 'pamsellem@pryorcashman.com',
            position: [{
                id: 33,
                term: 'Director'
            }],
            phone: '323.323.3454',
            slug: '/perry-m-amsellem'
        },
        {
            post_title: 'Micheal B. Adelman',
            email: 'madelman@pryorcashman.com',
            phone: '323.323.3454',
            slug: '/perry-m-amsellem'
        },

        {
            post_title: 'Micheal B. Adelman',
            email: 'madelman@pryorcashman.com',
            position: [{
                id: 33,
                term: "Associate"
            }],
            phone: '323.323.3454',
            slug: '/perry-m-amsellem'
        }
    ]

const manualContacts =
    [
        {
            headshot: {
                url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/09/Headshot-185-default-headshot-closeup-headshot-photo-133.jpg',
                width: 185,
                height: 185
            },
            name: "Perry M Amsellem",
            position: "HR Director",
            email: "pamsellem@pryorcashman.com",
            phone: "212.326.0119",
            slug: "/Perry-m-amsellem"
        },
        {
            name: "Valerie I. Aversano",
            email: "vaversano@pryorcashman.com",
            phone: "212.326.0449",
            slug: "/valerie-i-aversano"
        }
    ]

const manualContactsNoHeadshot =
    [
        {
            name: "Kaveri Arora",
            position: "HR Director",
            email: "karora@pryorcashman.com",
            phone: "212.326.0119",
        },
        {
            name: "Anne Atkinson",
            email: "aatkinson@pryorcashman.com",
            phone: "212.326.0449",
        }
    ]

export const contactsStory = () => <KeyContactsWidget contacts={object('contacts data', contacts)}/>
export const manualContactsStory = () => <KeyContactsWidget contacts={object('contacts data', manualContacts)}/>
export const manualContactsNoHeadshotStory = () => <KeyContactsWidget contacts={object('contacts data', manualContactsNoHeadshot)}/>

const TYPE = 'snapshot'
export default {
    title: `Sidebars/KeyContactsWidget-${TYPE}`,
    component: KeyContactsWidget,
    decorators: [
        (story) => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}