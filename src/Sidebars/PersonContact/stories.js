import {boolean, text} from '@storybook/addon-knobs'
import React from 'react'
import {Decorator as WithCustomProviders, SidebarDecorator} from '../../../.storybook/decorators/withCustomProviders'
import PersonContact from '../PersonContact'

export const associatedPerson = () =>
    <PersonContact
        name={text('name', 'Anthony F Cavanaugh')}
        image={{
            url: 'http://mako2-gjtest.gjassets.com/content/uploads/2020/09/Headshot-185-default-headshot-closeup-headshot-photo-133.jpg',
            width: 185,
            height: 185
        }}
        url="/"
    />

export const contact = () =>
    <PersonContact
        name={text('name', 'Anthony F Cavanaugh')}
        email={boolean('has email?', true) && 'test@test.com'}
        position={text('position', 'Partner')}
        phone={text('phone', '555-555-5555')}
    />

const TYPE = 'snapshot'
export default {
    title: `Sidebars/PersonContact-${TYPE}`,
    component: PersonContact,
    decorators: [
        (story) => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}