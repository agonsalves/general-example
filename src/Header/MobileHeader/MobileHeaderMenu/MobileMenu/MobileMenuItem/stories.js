import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../../../../.storybook/decorators/withCustomProviders'
import MobileMenuItem                     from './index'

const post = {microsite: '/michael-b-adelman'}
const item = {
    title: 'People',
    url: '/people'
}

export const MobileMenuPeopleStory = () => <MobileMenuItem item={item} post={post} resetSubMenuToggle={true}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MobileMenuItem-${TYPE}`,
    component: MobileMenuItem,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}