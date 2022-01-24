import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import {archiveListingStyle}              from '../ArchiveListingWrapper/styles'
import PublicationListing                 from './index'
import {boolean}                          from "@storybook/addon-knobs/dist/index"

const image ={
    url: "http://mako2-gjtest.gjassets.com/content/uploads/2020/08/Firm-leadership-Image-default-thumbnail-teaser-thumbnail-teaser-2240.jpg",
    height: 342,
    width: 555
}
const publicationListingData = {
    byline:"Johnathan Bishop",
    Source: "Legal Review",
    type: [{
        id:377,
        term:"Legal Updates"
    }],
    title: "USCIS Implements Biometrics and Additional Requirements for Form to Extend/Change Status",
    url: "/publications/uscis-implements-biometrics-and-additional-requirements-for-form-to-extend-change-status",
    date: "2020-11-12 00:00:00",
    displayDate: "November 12th 2020",
   }

export const publicationImageStory = () =>
    <PublicationListing
        {...publicationListingData}
        image ={image}
        useDisplayDate={boolean('useDisplayDate',true)}
        theme ={archiveListingStyle}

    />
export const publicationNoImageStory = () =>
    <PublicationListing
        {...publicationListingData}
        useDisplayDate={boolean('useDisplayDate',true)}
    />

const TYPE = 'snapshot'
export default {
    title: `Elements/PublicationListing-${TYPE}`,
    component: PublicationListing,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}