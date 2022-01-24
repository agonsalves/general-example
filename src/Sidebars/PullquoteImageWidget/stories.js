import React from 'react'
import {Decorator as WithCustomProviders, SidebarDecorator} from '../../../.storybook/decorators/withCustomProviders'
import {decodeEntities} from "../../utils/helpers"
import PullquoteImageWidget from "../PullquoteImageWidget"
import {text} from '@storybook/addon-knobs'

const quote = "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.</p>"
const img = {
    height: 215,
    url: "http://mako2-gjtest.gjassets.com/content/uploads/2020/07/Best-Architecture-HD-Wallpapers-default-widget-pullquote-image-widget-pullquote-image-4268.jpg",
    width: 370
}

export const pullquoteImage = () =>
    <PullquoteImageWidget
        attribution={text('attribution', 'John Appleseed')}
        attributionTitle={text('attribution title', 'Partner')}
        image={img}
        quote={decodeEntities(text('quote', quote))}/>

const TYPE = 'snapshot'
export default {
    title: `Sidebars/PullquoteImageWidget-${TYPE}`,
    component: PullquoteImageWidget,
    decorators: [
        (story) => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}