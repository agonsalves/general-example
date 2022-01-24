import {object}                            from '@storybook/addon-knobs'
import React                               from 'react'
import {Decorator as WithCustomProviders,} from '../../../.storybook/decorators/withCustomProviders'
import FooterMenu                          from './index'

const menu =
    [
        {
            ID: 4523,
            url: '/privacy-policy',
            title: 'Privacy Policy',

        },
        {
            ID: 4112,
            url: '/subscribe',
            title: 'Subscribe',
        },
        {
            ID: 4254,
            url: '/website-credits',
            title: 'Website Credits',
        },
        {
            ID: 3992,
            url: '',
            title: 'Do Not Sell My Personal Information',
        }

    ]
const theme = {
    width: 850
}

export const footerMenu = () => <FooterMenu menu={object('Footer Menu', menu)} theme={theme}/>

const TYPE = 'snapshot'
export default {
    title: `Menus/FooterMenu-${TYPE}`,
    component: FooterMenu,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}