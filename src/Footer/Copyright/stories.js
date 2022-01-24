import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import Copyright                          from './index'

export const copyrighttext = () =>
    <Copyright/>

const TYPE = 'snapshot'
export default {
    title: `Elements/Copyright-${TYPE}`,
    component: Copyright,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}