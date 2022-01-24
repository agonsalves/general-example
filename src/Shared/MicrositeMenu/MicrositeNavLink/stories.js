import {boolean}                          from '@storybook/addon-knobs/dist/index'
import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../../.storybook/decorators/withCustomProviders'
import MicrositeScrollController          from 'Controllers/MicrositeScrollController'
import MicrositeNavLink                   from './index'

const MicrositeNavLinkData = {
    children: 'Biography',
    microsite: '/michael-b-adelman',
    pathname: '/michael-b-adelman',
    url: '/michael-b-adelman/',
}

export const MicrositeNavLinkStory = () =>
    <MicrositeNavLink
        {...MicrositeNavLinkData}
        isActive={boolean('Selected State', true)}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MicrositeNavLink-${TYPE}`,
    component: MicrositeNavLink,
    decorators:
        [
            (story) =>
                <WithCustomProviders><MicrositeScrollController>{story()}</MicrositeScrollController></WithCustomProviders>
        ]
}