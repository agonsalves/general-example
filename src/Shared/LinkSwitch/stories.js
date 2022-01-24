import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import StyledLink                         from './StyledLink'

export const styledLinkStory = () =>
    <StyledLink
        children={'View all'}
        url={'https://www.google.com'}
        target={'_blank'}
        rel={'noopener no referrer'}
        type={''}
    />

export default {
    title: `Shared/StyledLink`,
    component: StyledLink,
    decorators: [(story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}