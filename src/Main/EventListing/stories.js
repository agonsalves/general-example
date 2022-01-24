import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import EventListing                       from './index'

const eventListingData = {
    title: 'Crown Shy Debuts at Rose Associates’ 70 Pine Street',
    url: '/news/crown-shy-debuts-at-rose-associates-70-pine-street',
    source: 'New York Times',
    date: '2020-06-10 00:00:00',
    displayDate: 'June 6th 2020',
    location: 'Skirball Cultural Center',
    otherSpeakers: 'Harriet DeSpell',
    people: [{
        email: 'tvidal@pryorcashman.com',
        id: 86,
        phone: '310.683.6992'

    }]
}

export const eventListingStory = () =>
    <EventListing {...eventListingData}/>

const TYPE = 'snapshot'
export default {
    title: `Elements/EventListing-${TYPE}`,
    component: EventListing,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}