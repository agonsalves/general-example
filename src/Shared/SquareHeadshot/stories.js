import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import SquareHeadshot                     from './index'

const squareHeadshotData = {
    image: {
        height: '185',
        url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/06/Person-default-headshot-closeup-headshot-photo-34.jpg',
        width: '185',
    },
    name: 'Michael B Adelman',
    size: 185
}

export const squareHeadshotStory = () =>
    <SquareHeadshot {...squareHeadshotData} />

const TYPE = 'snapshot'
export default {
    title: `Elements/SquareHeadshot-${TYPE}`,
    component: SquareHeadshot,
    decorators: [(story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}