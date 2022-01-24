import {text}           from '@storybook/addon-knobs'
import React            from 'react'
import {
    Decorator as WithCustomProviders,
    SidebarDecorator
}                       from '../../../.storybook/decorators/withCustomProviders'
import {decodeEntities} from '../../utils/helpers'
import PullquoteWidget  from '../PullquoteWidget'

const quote = '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.</p>'

export const pullquote = () =>
    <PullquoteWidget
        attribution={text('attribution', 'John Appleseed')}
        attributionTitle={text('attribution title', 'Partner')}
        quote={decodeEntities(text('quote', quote))}
    />

const TYPE = 'snapshot'
export default {
    title: `Sidebars/PullquoteWidget-${TYPE}`,
    component: PullquoteWidget,
    decorators: [
        (story) => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}