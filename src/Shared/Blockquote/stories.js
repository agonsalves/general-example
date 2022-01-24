import {text}                             from '@storybook/addon-knobs/dist/index'
import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import Blockquote                         from './index'

const blockquoteData = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vehicula venenatis bibendum. Phasellus in lectus ac orci elementum scelerisque. Pellentesque aliquet vel metus sed rhoncus. Suspendisse maximus mattis turpis, sed porttitor massa auctor at. Mauris leo odio, ultricies et placerat ac, congue sit amet eros. Donec ultrices purus a est dictum laoreet. Etiam eu erat id erat iaculis fringilla et vel erat. Sed euismod, justo eget varius mollis, elit nunc fermentum purus, sit amet venenatis dui est id metus. Nulla gravida id mauris ac interdum. Phasellus ultricies magna vitae erat tincidunt placerat. Fusce dui odio, aliquam nec nisi cursus, fermentum congue neque. Etiam ultrices bibendum ligula sit amet porttitor. Mauris ac nisi erat'

export const blockquoteStory = () =>
    <Blockquote children={text('Label', blockquoteData)}/>

export default {
    title: `Basic/Blockquote`,
    component: Blockquote,
    decorators: [(story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}