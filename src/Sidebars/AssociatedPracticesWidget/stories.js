import {object}                   from '@storybook/addon-knobs'
import React                     from 'react'
import {
    Decorator as WithCustomProviders,
    SidebarDecorator
}                                from '../../../.storybook/decorators/withCustomProviders'
import AssociatedPracticesWidget from '../AssociatedPracticesWidget'

const practices = [
    {
        'id': 237,
        'slug': '/banking-finance',
        'post_title': 'Banking + Finance',
        'post_name': 'banking-finance',
        'post_type': 'practice-area'
    },
    {
        'id': 246,
        'slug': '/insurance-recovery-counseling',
        'post_title': 'Insurance Recovery + Counseling',
        'post_name': 'insurance-recovery-counseling',
        'post_type': 'practice-area'
    },
]

export const twoPractices = () => <AssociatedPracticesWidget practices={object('practices data', practices)}/>

const TYPE = 'snapshot'
export default {
    title: `Sidebars/AssociatedPracticesWidget-${TYPE}`,
    component: AssociatedPracticesWidget,
    decorators: [
        story => <WithCustomProviders><SidebarDecorator>{story()}</SidebarDecorator></WithCustomProviders>
    ]
}