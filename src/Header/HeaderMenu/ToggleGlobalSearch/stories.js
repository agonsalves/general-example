import {boolean}                          from '@storybook/addon-knobs'
import ToggleGlobalSearch                 from 'Header/HeaderMenu/ToggleGlobalSearch/index'
import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../../.storybook/decorators/withCustomProviders'

export const toggleGlobalSearchIcon = () =>
    <ToggleGlobalSearch
        isOpen={boolean('isOpen?', false)}
        panelName={'toggle-global-search'}/>

const TYPE = 'snapshot'
export default {
    title: `Elements/ToggleGlobalSearch-${TYPE}`,
    component: ToggleGlobalSearch,
    decorators: [(story) => <WithCustomProviders> {story()} </WithCustomProviders>
    ]
}