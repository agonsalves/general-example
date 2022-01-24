import {
    isAboutUsSection,
    isBlog,
    isBlogSubPage,
    isCareersSection,
    isCaseStudyListing,
    isEventListing,
    isMicrosite
}                from 'utils/flags'
import {
    block,
    column,
    flex,
    row
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const postContentStyle = post => {
    const baseStyle = {
        display: flex,
        flexDirection: column,
        print: {
            display: block
        }
    }

    if (isMicrosite(post) && !isBlog(post))
        return {
            ...baseStyle,
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: row
        }

    if (isAboutUsSection(post))
        return {
            paddingLeft: [85, globals.style.layoutScalingValue, '0'],
            paddingRight: [115, globals.style.layoutScalingValue, '0'],
        }

    if (isCareersSection(post))
        return {
            paddingLeft: [85, globals.style.layoutScalingValue, '0'],
            paddingRight: [85, globals.style.layoutScalingValue, '0'],
        }

    if (isEventListing(post) || isCaseStudyListing(post)) {
        return {
            paddingTop: [56, globals.style.layoutScalingValue, '0'],
            paddingLeft: [85, globals.style.layoutScalingValue, '0'],
            paddingRight: [85, globals.style.layoutScalingValue, '0']
        }
    }

    if (isBlogSubPage(post)) {
        return {
            paddingTop: [76, globals.style.layoutScalingValue, '0'],
            paddingLeft: [85, globals.style.layoutScalingValue, '0'],
            paddingRight: [85, globals.style.layoutScalingValue, '0']
        }
    }

    return {
        ...baseStyle
    }
}