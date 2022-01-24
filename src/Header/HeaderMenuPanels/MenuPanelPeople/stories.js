import MenuPanelPeople from 'Header/HeaderMenuPanels/MenuPanelPeople'
import React           from 'react'
import {
    Decorator as WithCustomProviders,
    MenuPanelDecorator
}                      from '../../../../.storybook/decorators/withCustomProviders'

const parentPost = {
    id: '2321',
    key: '/',
    page_type: 'select',

}
const peopleData =
    {
        id: '2321',
        key: '/',
        page_type: 'select',
        parentPost: {parentPost},
        psot_name: 'home',
        post_title: 'Home',
        post_type: 'person',
        slug: '/',
        visible: true,
        person: {}
    }


export const menuPanelPeoplePanel = () => <MenuPanelPeople post={peopleData}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/MenuPanelPeople-${TYPE}`,
    component: MenuPanelPeople,
    decorators: [
        (story) => <WithCustomProviders><MenuPanelDecorator>{story()}</MenuPanelDecorator></WithCustomProviders>
    ]
}