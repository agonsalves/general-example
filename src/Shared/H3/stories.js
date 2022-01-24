import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import H3                                 from './index'
import {text}                             from "@storybook/addon-knobs/dist/index";

export const H3Story = () =>
    <H3 children={text('Label', "Praesent tristique posuere mauris, ut pulvinar est malesuada")}/>

const TYPE = 'snapshot'
export default {
    title: `Basic/H3-${TYPE}`,
    component: H3,
    decorators: [(story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}