import React                from 'react'
import {
    Decorator as WithCustomProviders,
    MenuPanelDecorator
}                           from '../../../.storybook/decorators/withCustomProviders'
import PeopleSearchAlphabet from './index'

export const peopleSearchAlphabetStory = () => <PeopleSearchAlphabet/>

const TYPE = 'snapshot'
export default {
    title: `Forms/PeopleSearchAlphabet-${TYPE}`,
    component: PeopleSearchAlphabet,
    decorators: [
        (story) => <WithCustomProviders><MenuPanelDecorator>{story()}</MenuPanelDecorator></WithCustomProviders>
    ]
}