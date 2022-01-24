import {object} from '@storybook/addon-knobs'
import React from 'react'
import {Decorator as WithCustomProviders, SidebarDecorator} from '../../../.storybook/decorators/withCustomProviders'
import FeaturedContentWidget from '../FeaturedContentWidget'

const widget =
    {
        related_posts:
            [
                {
                    post_type: 'news-item',
                    slug: '/michael-b-adelman/news/pryor-cashman-represents-seller-in-one-of-weeks-largest-nyc-real-estate-deals',
                    thumbnail_teaser:
                        {
                            'url': 'http://mako2-gjtest.gjassets.com/content/uploads/2020/08/1-default-thumbnail-teaser-thumbnail-teaser-1932.jpg',
                            'width': 555,
                            'height': 342
                        },
                    post_title: 'Reporting Cybersecurity Breaches to the SEC - What to Say and When to Say It'

                }
            ]

    }

export const featuredWidget = () => <FeaturedContentWidget widget={object('Featured data', widget)}/>

const TYPE = 'snapshot'
export default {
    title: `Sidebars/FeaturedContentWidget-${TYPE}`,
    component: FeaturedContentWidget,
    decorators: [
        (story) => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}