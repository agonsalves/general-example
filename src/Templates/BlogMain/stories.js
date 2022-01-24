import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import BlogMain                           from '../BlogMain'

const blogListingsData = {
    parentPost: {
        post_name: 'biologics-blog',
        post_title: 'Biologics Blog',
        key: '/biologics-blog'
    },
    order: ['4239', '4263', '4262'],
    page: 1,
    page_type: 'blogs',
    post_name: 'biologics-blog',
    post_title: 'Biologics Blog',
}

export const blogMainStory = () =>
    <BlogMain post={blogListingsData}/>


const TYPE = 'snapshot'
export default {
    title: `Templates/BlogMain-${TYPE}`,
    component: BlogMain,
    decorators: [(story) =>
        <WithCustomProviders>{story()}</WithCustomProviders>]

}