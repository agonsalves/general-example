import {isCareersSubPage} from 'utils/flags'
import {globals}          from 'variables/styles'

export const pageTitleInContentStyle = (post = {}) => {
    const baseStyle = {
        font: globals.fonts.heading,
        color: globals.colors.headingColor,
        size: [45, .7, 40],
        lineHeight: [40, .7, 36],
        weight: 600,
        marginBottom: [31, .7, 27]
    }

    if (isCareersSubPage(post))
        return {
            ...baseStyle,
            marginBottom: [38, .7, 21]
        }

    return {
        ...baseStyle
    }
}