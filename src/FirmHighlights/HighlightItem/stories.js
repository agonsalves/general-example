import {text}                             from '@storybook/addon-knobs/dist/index'
import React                              from 'react'
import Div                                from 'Shared/Div'
import {black}                            from 'utils/themer'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import HighlightItem                      from './index'

const highLightItemData = {
    title: 'Adipiscing tristique risus nec feugiat. Arcu felis bibendum ut tristique et egestas. Egestas congue quisque egestas diam.',
    description: '<p>Euismod quis viverra nibh cras pulvinar mattis nunc. Vulputate odio ut enim blandit. Magna ac placerat vestibulum lectus mauris ultrices eros in. Lacus sed turpis tincidunt id aliquet. Adipiscing vitae proin sagittis nisl rhoncus mattis. Tortor aliquam nulla facilisi cras fermentum odio. Vitae tortor condimentum lacinia quis vel eros donec. Sed velit dignissim sodales ut eu sem integer vitae. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Etiam erat velit scelerisque in dictum non co...',
    url: '/michael-b-adelman/biologics-blog/adipiscing-tristique-risus-nec-feugiat-arcu-felis-bibendum-ut-tristique-et-egestas-egestas-congue-quisque-egestas-diam',
}

export const HighlightItemNoImage = () =>
    <HighlightItem
        {...highLightItemData}
        label={text('label', 'Experience')}
    />
    
export const HighlightItemImage = () =>
    <HighlightItem
        {...highLightItemData}
        label={text('label', 'Experience')}
        image={{
            height: 251,
            url: 'http://sughrue-admin.gjtest.com/content/uploads/2020/02/international-default-thumbnail-teaser-thumbnail-teaser-2238-default-thumbnail-teaser-thumbnail-teaser-1932.jpg',
            width: 373
        }}
    />

export default {
    title: `Firm Highlights/Highlight Item`,
    component: HighlightItem,
    decorators: [(story) =>
        <WithCustomProviders><Div theme={{backgroundColor: black}}>{story()}</Div></WithCustomProviders>
    ]
}