import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import BlogPostByline                     from './index'

const authors= [{
    id: 34,
    post_title: "Michael B Adelman",
    slug: "/michael-b-adelman"
},
    {
        id: 163,
        post_title: "Erica Allegretta",
        slug: "erica-allegretta"
    }]

export const blogPostBylineStory = () =>  <BlogPostByline authors={authors} />

const TYPE = 'snapshot'
export default {
    title: `Elements/BlogPostByline-${TYPE}`,
    component: BlogPostByline,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}