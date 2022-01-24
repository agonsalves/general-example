import React                              from 'react'
import Div                                from 'Shared/Div'
import {black}                            from 'utils/themer'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import Title                              from './index'

const post = {
    parentPost: {
        post_type: 'Person',
        post_title: 'Intellectual Property ',
    }
}

export const titleStory = () => <Title post={post}/>

const TYPE = 'snapshot'
export default {
    title: `Elements/Title-${TYPE}`,
    component: Title,
    decorators: [
        (story) => <WithCustomProviders><Div theme={{backgroundColor: black}}>{story()}</Div></WithCustomProviders>
    ]
}