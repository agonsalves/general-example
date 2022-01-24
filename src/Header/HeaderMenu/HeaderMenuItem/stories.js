import React                              from 'react'
import {
    firm,
    industries,
    people,
    services
}                                         from '../../../../.storybook/data/headerData.js'
import {Decorator as WithCustomProviders} from '../../../../.storybook/decorators/withCustomProviders'
import HeaderMenuItem                     from '../HeaderMenuItem'

export const headerMenuPeople = () => <HeaderMenuItem item={people} setMeasurements={(() => {
})}/>
export const headerMenuServices = () => <HeaderMenuItem item={services} setMeasurements={(() => {
})}/>
export const headerMenuIndustries = () => <HeaderMenuItem item={industries} setMeasurements={(() => {
})}/>
export const headerMenuFirm = () => <HeaderMenuItem item={firm} setMeasurements={(() => {
})}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/HeaderMenuItem-${TYPE}`,
    component: HeaderMenuItem,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}