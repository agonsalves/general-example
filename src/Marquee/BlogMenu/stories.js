import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import Div                                from '../../Shared/Div'
import {black}                            from '../../utils/themer'
import BlogMenu                           from './index'

const pagesData = [
    {post_title: 'Subscribe'},
    {post_title: 'Resources'}
]

const blogMenuData = {
    pages: pagesData,
    blogSlug: '/biologics-blog',
    postSlug: '/biologics-blog'
}

export const menuBlogData = () => <BlogMenu {...blogMenuData}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MenuBlog-${TYPE}`,
    component: BlogMenu,
    decorators: [
        (story) => <WithCustomProviders><Div theme={{backgroundColor: black}}>{story()}</Div></WithCustomProviders>
    ]
}