import {
    boolean,
    text
}                         from '@storybook/addon-knobs'
import React              from 'react'
import {
    Decorator as WithCustomProviders,
    SidebarDecorator
}                         from '../../../.storybook/decorators/withCustomProviders'
import {decodeEntities}   from '../../utils/helpers'
import CallToActionWidget from '../CallToActionWidget'

const richText = '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>'

export const defaultWidget = () =>
    <CallToActionWidget
        title={text('title', 'Call to Action Widget')}
        text={decodeEntities(text('text', richText))}
        url={boolean('has button?', true) && '/'}
        buttonLabel={text('button label', 'Subscribe')}
        buttonTitle={text('button title', 'This is a subscribe button')}
    />

const TYPE = 'snapshot'
export default {
    title: `Sidebars/CallToActionWidget-${TYPE}`,
    component: CallToActionWidget,
    decorators: [
        (story) => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}