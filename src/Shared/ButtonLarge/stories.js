import {faArrowRight}                     from '@fortawesome/pro-regular-svg-icons/faArrowRight'
import {text}                             from '@storybook/addon-knobs'
import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import ButtonLarge                        from './index'

export const defaultLargeButton = () => <ButtonLarge url="/"
                                                     title={'hello'}>{text('Label', 'Read More 22')}</ButtonLarge>
export const withIconLargeButton = () => <ButtonLarge url="/" title={'hello'}
                                                      icon={faArrowRight}>{text('Label', 'Read More 22')}</ButtonLarge>

// TYPE is not defined! This story should not be picked up

const TYPE = 'snapshot'
export default {
    title: `Components/Button-${TYPE}`,
    component: ButtonLarge,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}