import React                              from 'react'
import {publication_related_posts}        from '../../../.storybook/data/archiveListingData'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import PublicationListings                from '../PublicationListings'

const publicationsListingsData = {
    parentPost: {
        archive_page_type: true,
        archive_post_type: 'publication',
        key: '/publications'
    },
    order: ['2240', '2239', '2241'],
    page: 1,
    page_type: 'publications',
    post_name: 'publications',
    related_posts: publication_related_posts

}

export const publicationsListingsStory = () =>
    <PublicationListings post={publicationsListingsData}/>


const TYPE = 'snapshot'
export default {
    title: `Templates/PublicationListings-${TYPE}`,
    component: PublicationListings,
    decorators: [(story) =>
        <WithCustomProviders>{story()}</WithCustomProviders>]

}