import MenuPanelServiceSubItem            from 'Header/HeaderMenuPanels/MenuPanelServiceSubItem'
import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'

const serviceItemShort = {
    children: [],
    display_as_main_practice: false,
    slug: '/litigation',
    title: 'Litigation',
}

const serviceItemLong = {
    display_as_main_practice: false,
    slug: '/executive-compensation-erisa-employee-benefits',
    title: 'Executive Compensation, ERISA + Employee Benefits'
}

export const menuPanelServiceSubItemShortStory = () =>
    <MenuPanelServiceSubItem child={serviceItemShort} pathname={'/'}/>

export const menuPanelServiceSubItemItemLongStory = () =>
    <MenuPanelServiceSubItem child={serviceItemLong} pathname={'/litigation'}/>

export const menuPanelServiceSubItemSelectedStory = () =>
    <MenuPanelServiceSubItem child={serviceItemShort} pathname={'/litigation'}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MenuPanelServiceSubItem-${TYPE}`,
    component: MenuPanelServiceSubItem,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}