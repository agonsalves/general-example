import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../../../.storybook/decorators/withCustomProviders'
import MobileHeaderMenuToggle             from './index'

const toogleMenu = {
    pathname: '/',
    search: ''
}
export const MobileHeaderMenuToggleStory = () => <MobileHeaderMenuToggle {...toogleMenu}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MobileHeaderMenuToggle-${TYPE}`,
    component: MobileHeaderMenuToggle,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}