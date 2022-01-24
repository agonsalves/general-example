import {boolean}                          from '@storybook/addon-knobs/dist/index'
import React                              from 'react'
import {
    bar_memberships_fieldset,
    community_Content,
    custom_Content,
    education_fieldset,
    experience_Content,
    languages_fieldset,
    membership_Content,
    recognition_Content
}                                         from '../../../../../../.storybook/data/bioInfoSubheadsData'
import {Decorator as WithCustomProviders} from '../../../../../../.storybook/decorators/withCustomProviders'
import RichText                           from '../../../../../Shared/RichText'
import AccordionSubhead                   from './index'
import BarAdmissions                      from '../BarAdmissions'
import Education                          from '../Education'
import Languages                          from '../Languages'

const educationContent = education_fieldset
const baradmissionContent = bar_memberships_fieldset
const languageContent = languages_fieldset
const membershipContent = membership_Content
const experienceContent = experience_Content
const recognitionContent = recognition_Content
const communityContent = community_Content
const customContent = custom_Content

const educationItem = {
    heading: 'Education',
    content: educationContent,
    key: 'education_fieldset',
    Component: Education
}
const baradmissionItem = {
    heading: 'Bar Admissions',
    content: baradmissionContent,
    key: 'bar_memberships_fieldset',
    Component: BarAdmissions
}
const membershipsItem = {
    heading: 'Memberships',
    content: membershipContent,
    key: 'professional_affiliations',
    Component: RichText
}
const languagesItem = {
    heading: 'Languages',
    content: languageContent,
    key: 'languages_fieldset',
    Component: Languages
}
const experienceItem = {
    heading: 'Experience',
    content: experienceContent,
    key: 'work_experience',
    Component: RichText
}
const recognitionItem = {
    heading: 'Recognition',
    content: recognitionContent,
    key: 'special_honors',
    Component: RichText
}
const communityItem = {
    heading: 'Community',
    content: communityContent,
    key: 'charitable_civic_involvement',
    Component: RichText
}
const customItem = {
    heading: 'This is a Custom Accordian Subhead',
    content: customContent,
    key: 'custom_categories_0',
    Component: RichText
}

export const educationStory = () =>
    <AccordionSubhead
        item={educationItem}
        isExpanded={boolean('IsExpanded?', true)}
        toggleExpanded={() => {
        }}
    />
export const baradmissionStory = () =>
    <AccordionSubhead
        item={baradmissionItem}
        isExpanded={boolean('IsExpanded?', true)}
        toggleExpanded={(() => {
        })}/>
export const membershipsItemStory = () =>
    <AccordionSubhead
        item={membershipsItem}
        isExpanded={boolean('IsExpanded?', true)}
        toggleExpanded={(() => {
        })}/>
export const languageItemStory = () =>
    <AccordionSubhead
        item={languagesItem}
        isExpanded={boolean('IsExpanded?', true)}
        toggleExpanded={(() => {
        })}/>
export const experienceItemStory = () =>
    <AccordionSubhead
        item={experienceItem}
        isExpanded={boolean('IsExpanded?', true)}
        toggleExpanded={(() => {
        })}/>
export const recognitionItemStory = () =>
    <AccordionSubhead
        item={recognitionItem}
        isExpanded={boolean('IsExpanded?', true)}
        toggleExpanded={(() => {
        })}/>
export const communityItemStory = () =>
    <AccordionSubhead
        item={communityItem}
        isExpanded={boolean('IsExpanded?', true)}
        toggleExpanded={(() => {
        })}/>
export const customItemStory = () =>
    <AccordionSubhead
        item={customItem}
        isExpanded={boolean('IsExpanded?', true)}
        toggleExpanded={(() => {
        })}/>

const TYPE = 'snapshot'
export default {
    title: `Microsites/AccordionSubhead-${TYPE}`,
    component: AccordionSubhead,
    decorators: [(story) => <WithCustomProviders>{story()}</WithCustomProviders>
    ]
}