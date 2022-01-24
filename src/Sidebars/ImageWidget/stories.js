import {text}           from '@storybook/addon-knobs'
import React            from 'react'
import {
    Decorator as WithCustomProviders,
    SidebarDecorator
}                       from '../../../.storybook/decorators/withCustomProviders'
import {decodeEntities} from '../../utils/helpers'
import ImageWidget      from '../ImageWidget'

const caption = '<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>'
const image = {
    'url': 'http://mako2-gjtest.gjassets.com/content/uploads/2020/07/Best-Architecture-HD-Wallpapers-default-widget-image-widget-image-4269.jpg',
    'width': 370,
    'height': 215
}

export const standard = () =>
    <ImageWidget
        caption={decodeEntities(text('caption', caption))}
        image={image}
    />

const TYPE = 'snapshot'
export default {
    title: `Sidebars/ImageWidget-${TYPE}`,
    component: ImageWidget,
    decorators: [
        (story) => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}