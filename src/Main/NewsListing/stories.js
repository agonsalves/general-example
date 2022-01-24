import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import NewsListing                        from './index'
import {boolean}                          from "@storybook/addon-knobs/dist/index";

const image = {
    url: "http://mako2-gjtest.gjassets.com/content/uploads/2020/08/1-default-thumbnail-teaser-thumbnail-teaser-1930.jpg",
    height: 342,
    width: 555
}
const newsListingData = {
    type: [{
        id: 368,
        term: "News"
    }],
    title: "Crown Shy Debuts at Rose Associates’ 70 Pine Street",
    url: "/news/crown-shy-debuts-at-rose-associates-70-pine-street",
    source: "New York Times",
    date: "2020-06-10 00:00:00"
}

export const newsListingImageStory = () =>
    <NewsListing
        {...newsListingData}
        image={image}
        isFirstItem={boolean('isFirstItem', true)}
    />
export const newsListingNoImageStory = () =>
    <NewsListing
        {...newsListingData}
        isFirstItem={boolean('isFirstItem', true)}
    />

const TYPE = 'snapshot'
export default {
    title: `Elements/NewsListing-${TYPE}`,
    component: NewsListing,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}