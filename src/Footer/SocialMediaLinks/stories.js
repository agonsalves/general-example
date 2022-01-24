import React                              from 'react'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import FooterSocialMediaLinks             from './'

const footerSocialMediaLinksData = {
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/'
}

export const footerSocialMediaLinksStory = () => <FooterSocialMediaLinks socialLinks={footerSocialMediaLinksData}/>

const TYPE = 'snapshot'
export default {
    title: `Elements/FooterSocialMediaLinks-${TYPE}`,
    component: FooterSocialMediaLinks,
    decorators: [
        (story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}