import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import PersonListing                      from './index'

const personListingData = {
    name: 'Benjamin S Akley',
    url: '/michael-b-adelman',
    position: 'Big Law Guy',
    phone: '212.326.3251',
    email: 'madelman@pryorcashman.com',
}
const headshot = {
    height: '185',
    url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/06/Person-default-headshot-closeup-headshot-photo-34.jpg',
    width: '185'
}

export const personListingImageStory = () =>
    <PersonListing {...personListingData} headshot={headshot}/>
export const personListingNoImageStory = () =>
    <PersonListing {...personListingData} />

const TYPE = 'snapshot'
export default {
    title: `Microsites/PersonListing-${TYPE}`,
    component: PersonListing,
    decorators: [(story) => <WithCustomProviders> {story()} </WithCustomProviders>
    ]
}