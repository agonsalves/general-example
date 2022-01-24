import {
    boolean,
    text
}                       from '@storybook/addon-knobs'
import React            from 'react'
import {
    Decorator as WithCustomProviders,
    SidebarDecorator
}                       from '../../../.storybook/decorators/withCustomProviders'
import {decodeEntities} from '../../utils/helpers'
import VideoWidget      from '../VideoWidget'

const image = {
    url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/08/1-default-widget-video-image-widget-video-image-4288.jpg',
    width: 370,
    height: 215
}
const caption = '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>'

export const allFeatures = () =>
    <VideoWidget
        videoUrl={text('video URL', 'https://www.youtube.com/watch?v=lM02vNMRRB0')}
        image={image}
        hasPlayButton={boolean('has play button?', true)}
        caption={decodeEntities(text('caption', caption))}
    />


const TYPE = 'snapshot'
export default {
    title: `Sidebars/VideoWidget-${TYPE}`,
    component: VideoWidget,
    decorators: [
        (story) => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}