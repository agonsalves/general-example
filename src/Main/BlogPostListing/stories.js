import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import BlogPostListing                    from './index'

const blogListingData = {
    categories: [{
        id: 418,
        term: 'Biotech'
    },
        {
            id: 420,
            term: 'Intellectual Property'
        }],
    title: 'Aliquam dolores turpis net, tincidunt eu lectus velouse, euismodes scelerisque.',
    url: '/biologics-blog/aliquam-dolores-turpis-net-tincidunt-eu-lectus-velouse-euismodes-scelerisque',
    source: 'New York Times',
    date: '2020-08-12 00:00:00',

}

export const blogPostListingImageStory = () =>
    <BlogPostListing {...blogListingData} />

const TYPE = 'snapshot'
export default {
    title: `Elements/BlogPostListing-${TYPE}`,
    component: BlogPostListing,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}