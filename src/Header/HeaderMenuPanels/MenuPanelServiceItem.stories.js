import MenuPanelServiceItem               from 'Header/HeaderMenuPanels/MenuPanelServiceItem'
import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'

const service = {
    children: [{
        display_as_main_practice: false,
        slug: '/media-entertainment-litigation',
        title: 'Media + Entertainment Litigation',
    }],
    title: 'Litigation'
}
const serviceItemSelected = {
    children: [{
        display_as_main_practice: true,
        post_name: 'prosecution-counseling',
        slug: '/prosecution-counseling',
        title: 'Prosecution & Counseling',
    },
        {
            display_as_main_practice: false,
            slug: '/alternative-dispute-resolution',
            title: 'Alternative Dispute Resolution',
        }],
    permalink: '',
    title: 'Prosecution & Counseling',
}

export const menuPanelServiceItemShortStory = () =>
    <MenuPanelServiceItem
        service={service}
        pathname={'/prosecution-counseling'}
    />

const TYPE = 'snapshot'
export default {
    title: `Menus/MenuPanelServiceItem-${TYPE}`,
    component: MenuPanelServiceItem,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}