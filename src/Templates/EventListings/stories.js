import React                              from 'react'
import {event_related_Posts}              from '../../../.storybook/data/archiveListingData'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import EventListings                      from '../EventListings'

const eventListingsData = {
    parentPost: {
        archive_page_type: true,
        archive_post_type: 'event',
        id: '2443',
        key: '/events'
    },
    full_content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>',
    page: 1,
    page_type: 'events',
    post_name: 'events',
    post_type: 'page',
    post_title: 'Events',
    slug: '/events',
    template: 'events',
    related_posts: event_related_Posts,
}

export const eventListingsStory = () =>
    <EventListings post={eventListingsData}/>

const TYPE = 'snapshot'
export default {
    title: `Templates/EventListings-${TYPE}`,
    component: EventListings,
    decorators: [(story) =>
        <WithCustomProviders>{story()}</WithCustomProviders>]

}