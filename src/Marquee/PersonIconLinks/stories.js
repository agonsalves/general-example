import {
    faLinkedinIn,
    faTwitter
}                                         from '@fortawesome/free-brands-svg-icons/index'
import React                              from 'react'
import Div                                from 'Shared/Div'
import {
    fileSolid,
    user
}                                         from 'variables/iconLibrary'
import {Decorator as WithCustomProviders} from '../../../.storybook/decorators/withCustomProviders'
import PersonIconLink                     from './PersonIconLink'

const LinkedinData = {
    title: 'Join My LinkedIn Network',
    url: 'https://www.linkedin.com/in/michael-adelman-a7882ab',
}
const TwitterData = {
    title: 'Follow Me on Twitter',
    url: 'https://twitter.com/BarackObama',
}
const vCardData = {
    title: 'Download My vCard',
    url: 'data:text/vcard;charset=utf-8,BEGIN:VCARD\\r\\nVERSION:3.0\\r\\nREV:2020-05-22T19:07:59.974Z\\r\\nN;CHARSET=utf-8:Adelman;Michael;B;;\\r\\nFN;CHARSET=utf-8:Michael B Adelman\\r\\nORG;CHARSET=utf-8:Sughrue Mion PLLC\\r\\nURL;WORK:https://sugrue.gjtest.com/michael-b-adelman\\r\\nTITLE;CHARSET=utf-8:Big Law Guy\\r\\nEMAIL;INTERNET:madelman@pryorcashman.com\\r\\nPHOTO;ENCODING=BASE64;TYPE=JPG:true\\r\\nTEL;WORK:212.326.1435\\r\\nADR;WORK,POSTAL;CHARSET=utf-8:New York, NY;;;;;;USA\\r\\nLABEL;WORK,POSTAL;CHARSET=utf-8:\\\\n,  \\r\\nTEL;WORK:212.666.9999\\r\\n..."',
}
const DownloadBioData = {
    title: 'Download Bio',
    url: 'http://sughrue-admin.gjtest.com/content/uploads/2020/02/test.pdf'
}

export const personLinkedInIconStory = () =>
    <PersonIconLink
        {...LinkedinData}
        icon={faLinkedinIn}
    />
export const personTwitterLinkStory = () =>
    <PersonIconLink
        {...TwitterData}
        icon={faTwitter}
    />
export const personvCardLinkStory = () =>
    <PersonIconLink
        {...vCardData}
        icon={user}
    />
export const personDownloadBioLinkStory = () =>
    <PersonIconLink
        {...DownloadBioData}
        icon={fileSolid}
    />

const TYPE = 'snapshot'
export default {
    title: `Microsites/PersonIconLink-${TYPE}`,
    component: PersonIconLink,
    decorators: [(story) => <WithCustomProviders> <Div
        theme={{width: [18, .7, 22]}}>{story()}</Div></WithCustomProviders>
    ]
}