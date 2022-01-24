import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../../.storybook/decorators/withCustomProviders'
import PredictiveSectionHeading           from './index'

const sectionPeople = {
    id: 0,
    title: 'People'
}
const sectionPractices = {
    id: 0,
    title: 'Services / Industries'
}

export const predictiveSectionPeopleHeading = () => <PredictiveSectionHeading section={sectionPeople}/>
export const predictiveSectionServicesHeading = () => <PredictiveSectionHeading section={sectionPractices}/>

export default {
    title: `Shared/Predictive Section Heading`,
    component: PredictiveSectionHeading,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}