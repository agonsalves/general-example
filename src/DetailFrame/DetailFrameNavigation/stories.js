import DetailFrame                        from 'DetailFrame'
import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import DetailFrameNavigation              from '../DetailFrameNavigation'

const detailPage = {
    key: '/michael-b-adelman/events/aila-annual-conference-on-immigration-law',
    post_name: 'reporting-cybersecurity-breaches-to-the-sec-what-to-say-and-when-to-say-it',
    post_title: 'Reporting Cybersecurity Breaches to the SEC - What to Say and When to Say It',
    post_type: 'publication',
    microsite: '/michael-b-adelman',
    slug: '/michael-b-adelman/publications/reporting-cybersecurity-breaches-to-the-sec-what-to-say-and-when-to-say-it'
}

const microsite_pages = [
    {
        id: '3375',
        child_type: 'publication',
        post_title: 'Publications',
        post_name: 'publications',
        post_type: 'microsite-page',
        slug: '/michael-b-adelman/publications',
        microsite: '/michael-b-adelman',
        query_name: 'person_publications'
    }
]

const post = {
    detailPage,
    microsite_pages,
    post_title: 'Michael B Adelman'
}

export const detailFrameNavigation = () =>
    <DetailFrameNavigation
        post={post}
        next={'/michael-b-adelman/events/aila-annual-conference-on-immigration-law'}
        prev={'/michael-b-adelman/events/digital-hollywood-spring-conference-2'}
    />

export default {
    title: `Detail Frame/Navigation`,
    component: DetailFrameNavigation,
    decorators: [(story) => <WithCustomProviders><DetailFrame>{story()}</DetailFrame></WithCustomProviders>]
}