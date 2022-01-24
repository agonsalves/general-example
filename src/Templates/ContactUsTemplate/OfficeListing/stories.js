import {text}                             from '@storybook/addon-knobs/dist/index'
import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../../.storybook/decorators/withCustomProviders'
import OfficeListing                      from './index'

const locationData = {
    image: {
        url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/10/Photo1-1-default-office-location-image-upload-2.jpg',
        height: 350,
        width: 467
    },
    slug: '/office-locations/new-york-ny'
}
export const officeListingStory = () =>
    <OfficeListing
        city={text('City', 'New York')}
        state={text('state', 'NY')}
        address_region={text('region', 'NY')}
        address_locality={text('Locality', 'New York')}
        {...locationData}
    />

const TYPE = 'snapshot'
export default {
    title: `Elements/OfficeListing-${TYPE}`,
    component: OfficeListing,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}