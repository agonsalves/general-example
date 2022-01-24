import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import SiteLogo                           from '../SiteLogo'

export const siteLogoImage = () =>
    <SiteLogo title="Sughrue Mion PLLC"/>

const TYPE = 'snapshot'
export default {
    title: `Elements/SiteLogo-${TYPE}`,
    component: SiteLogo,
    decorators: [(story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}