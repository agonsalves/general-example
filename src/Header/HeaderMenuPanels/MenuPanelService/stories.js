import MenuPanelService from 'Header/HeaderMenuPanels/MenuPanelService'
import React            from 'react'
import {
    Decorator as WithCustomProviders,
    MenuPanelDecorator
}                       from '../../../../.storybook/decorators/withCustomProviders'

export const menuPanelServicePanel = () => <MenuPanelService slug={'/Litigation'} title={'Litigation'}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MenuPanelService-${TYPE}`,
    component: MenuPanelService,
    decorators: [
        (story) => <WithCustomProviders><MenuPanelDecorator>{story()}</MenuPanelDecorator></WithCustomProviders>
    ]
}