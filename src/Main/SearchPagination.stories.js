import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../.storybook/decorators/withCustomProviders'
import SearchPagination                   from './SearchPagination'
import {text}                             from '@storybook/addon-knobs'

export const SearchPaginationStory = () =>
    <SearchPagination
        slug={"/people"}
        query={{
            from: text('from', 0),
            total: 179,
            size: text('size', 30),
            search:
                {post_type: "person"}
        }}
    />

const TYPE = 'snapshot'
export default {
    title: `Elements/SearchPagination-${TYPE}`,
    component: SearchPagination,
    decorators: [(story) => <WithCustomProviders> {story()}</WithCustomProviders>
    ]
}