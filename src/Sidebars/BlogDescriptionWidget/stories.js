import React                 from 'react'
import {
    Decorator as WithCustomProviders,
    SidebarDecorator
}                            from '../../../.storybook/decorators/withCustomProviders'
import BlogDescriptionWidget from '../BlogDescriptionWidget'

const blogDescription = '<p>Donec sodales enim nisl. Nam elit blandit odio venenatis, varius quam eget, ultricies odio. Morbi aliquam fermentum purus nulla, dolores eu sollicitudin mauris tempor a elit sit. Pellentesque non suscipit lorem maecenas eu nunc vulputate mauris aliquam cursus sed in ipsum.</p>'

export const blogDescriptionWidgetWidget = () =>
    <BlogDescriptionWidget blogDescription={blogDescription}/>

const TYPE = 'snapshot'
export default {
    title: `Sidebars/BlogDescriptionWidget-${TYPE}`,
    component: BlogDescriptionWidget,
    decorators: [
        (story) => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}