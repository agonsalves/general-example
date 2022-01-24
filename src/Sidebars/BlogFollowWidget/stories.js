import React              from 'react'
import {
    Decorator as WithCustomProviders,
    SidebarDecorator
}                         from '../../../.storybook/decorators/withCustomProviders'
import BlogFollowWidget from "../BlogFollowWidget";

export const blogFollowWidget = () =>
    <BlogFollowWidget
       emailLink={"http://google.com"}
       linkedinLink={"http://google.com"}
       twitterLink={"http://twitter.com/kylegriffin1"}
    />

const TYPE = 'snapshot'
export default {
    title: `Sidebars/BlogFollowWidget-${TYPE}`,
    component: BlogFollowWidget,
    decorators: [
        (story) => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}