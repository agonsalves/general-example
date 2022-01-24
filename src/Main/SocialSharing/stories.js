import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import SocialSharing                      from './index'

const post = {
    post_title: 'Crown Shy Debuts at Rose Associates’ 70 Pine Street',
}

export const socialSharingStory = () =>
    <SocialSharing
        post={post}
        url={'https://undefined/news/crown-shy-debuts-at-rose-associates-70-pine-street'}
    />

const TYPE = 'snapshot'
export default {
    title: `Elements/SocialSharing-${TYPE}`,
    component: SocialSharing,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}