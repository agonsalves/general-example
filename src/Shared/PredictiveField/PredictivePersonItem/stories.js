import React                from 'react'
import {
    Decorator as WithCustomProviders,
    MenuPanelDecorator
}                           from '../../../../.storybook/decorators/withCustomProviders'
import PredictivePersonItem from './index'

const photo = {
    height: '185',
    width: '185',
    url: 'http://mako2-admin.gjtest.com/content/uploads/2020/01/de-Armas_C_Thumb.jpg',
}
const personPredictiveItemData = {
    isHighlighted: false,
    name: 'Daniel Derby',
    position: 'Partner',
    slug: '/benjamin-j-teig'
}

export const predictivePersonItemStory = () =>
    <PredictivePersonItem {...personPredictiveItemData} photo={photo}/>

export const predictivePersonItemNoPhotoStory = () =>
    <PredictivePersonItem {...personPredictiveItemData}/>

const TYPE = 'snapshot'
export default {
    title: `Forms/PredictivePersonItem-${TYPE}`,
    component: PredictivePersonItem,
    decorators: [
        (story) => <WithCustomProviders><MenuPanelDecorator>{story()}</MenuPanelDecorator></WithCustomProviders>
    ]
}