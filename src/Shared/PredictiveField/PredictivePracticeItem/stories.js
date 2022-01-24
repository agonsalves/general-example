import React                  from 'react'
import {
    Decorator as WithCustomProviders,
    MenuPanelDecorator
}                             from '../../../../.storybook/decorators/withCustomProviders'
import PredictivePracticeItem from './index'

const practicesPracticeList = {
    isHighlighted: false,
    name: 'Technology',
    slug: '/Technology'
}
const practicesViewAll = {
    isHighlighted: false,
    name: 'Long name for Services',
    slug: '/?s=te'
}

export const predictivePracticeListItemStory = () => <PredictivePracticeItem  {...practicesPracticeList} />
export const predictivePracticeViewAllItemStory = () => <PredictivePracticeItem  {...practicesViewAll} />

const TYPE = 'snapshot'
export default {
    title: `Forms/PredictivePracticeItem-${TYPE}`,
    component: PredictivePracticeItem,
    decorators: [
        (story) => <WithCustomProviders><MenuPanelDecorator>{story()}</MenuPanelDecorator></WithCustomProviders>
    ]
}