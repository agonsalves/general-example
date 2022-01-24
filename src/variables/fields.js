import {
    articlize,
    singular
} from '../utils/helpers'
import {
    angleDown,
    search
} from './iconLibrary'

/**
 *    Field declarations at the top of the file.
 *    Form configurations at the bottom.
 */

/**
 *    Archive Search Fields
 */
const keywordField = {
        name: 'keyword',
        placeholder: 'Keyword',
        icon: search,
    },
    personField = {
        name: 'people',
        placeholder: `${singular('person')}`,
        icon: angleDown,
        label: singular('person')
    },
    practiceField = {
        name: 'practice_area',
        placeholder: `${singular('practice-area')}/${singular('industry')}`,
        icon: angleDown,
        label: singular('practice-area')
    },
    industryField = {
        name: 'practice_area',
        placeholder: `Filter by ${singular('industry')}`,
        icon: angleDown,
        label: singular('practice-area')
    },
    yearField = {
        name: 'date',
        placeholder: 'Year',
        icon: angleDown,
        label: 'Year'
    },
    newsTypeField = {
        name: 'news_item_type',
        placeholder: `${singular('news-item')} Type`,
        icon: angleDown,
        label: `${singular('news-item')} Type`
    },
    publicationTypeField = {
        name: 'publication_type',
        placeholder: `${singular('publication')} Type`,
        icon: angleDown,
        label: `${singular('publication')} Type`
    },
    practiceNameField = {
        name: 'keyword',
        placeholder: `Type in ${articlize(singular('practice-area'))}`,
        icon: search,
        predictive: ['practice-area'],
    }

/**
 *    People Search Fields
 */
const personNameField = {
        name: 'keyword',
        placeholder: 'Name or keyword',
        icon: search,
        predictive: ['person']
    },
    personPositionField = {
        name: 'position',
        placeholder: 'Position',
        icon: angleDown,
        label: 'Position'
    },
    personPracticeField = {
        name: 'practice_area',
        placeholder: `${singular('practice-area')} / Industry`,
        icon: angleDown,
        label: singular('practice-area')
    },
    personOfficeField = {
        name: 'office_location',
        placeholder: `Office`,
        icon: angleDown,
        label: singular('office')
    },
    // personEducationField = {
    //     name: 'education_fieldset',
    //     placeholder: `Select a school`,
    //     icon: angleDown,
    //     label: 'Education'
    // },
    personBarAdmissionField = {
        name: 'bar_memberships_fieldset',
        placeholder: 'Bar Admission',
        icon: angleDown,
        label: 'Bar Admission'
    },
    personLanguageField = {
        name: 'languages_fieldset',
        placeholder: 'Language',
        icon: angleDown,
        label: 'Language'
    }

/**
 *    FORM CONFIGURATION
 */

export const searchForms = {
    'news-item': {
        fields: [
            keywordField,
            yearField,
            personField,
            newsTypeField,
            practiceField,
        ]
    },
    publication: {
        fields: [
            keywordField,
            yearField,
            personField,
            practiceField,
            publicationTypeField
        ]
    },
    event: {
        fields: [
            keywordField,
            yearField,
            personField,
            practiceField,
        ]
    },
    'case-study': {
        fields: [
            keywordField,
            personField,
            practiceField,
        ]
    },
    person: {
        fields: [
            personNameField,
            personPracticeField,
            personPositionField,
            personOfficeField,
            personBarAdmissionField,
            personLanguageField
        ]
    },
    'practice-area': {
        fields: [
            practiceNameField
        ]
    },
    'industry': {
        fields: [
            industryField
        ]
    }
}

